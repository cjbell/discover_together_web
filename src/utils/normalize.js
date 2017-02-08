import { isArray, forEach, keys, map, camelCase, mapKeys } from 'lodash';

function normalize(response) {
  let data

  if (isArray(response.data)) {
    data = response.data
  } else {
    data = [response.data]
  }

  const included = response.included || []

  let allResources = [...data, ...included]
  let result = {}
  let entities = {}

  forEach(allResources, entity => {
    addResult(result, entity)
    addEntity(entities, entity)
  })

  return {
    result,
    entities
  };
}

function addResult (result, entity) {
  const { id } = entity
  const type = camelCase(entity.type);

  if (!result[type]) result[type] = []

  result[type].push(id)
}

function addEntity (entities, entity) {
  const { id, attributes } = entity
  const type = camelCase(entity.type);

  if (!entities[type]) entities[type] = {}

  entities[type][id] = {
    id,
    ...mapKeys(attributes, (v, k) => camelCase(k)),
    ...extractRelationships(entity)
  }

  return entities
}

function extractRelationships (entity) {
  const { relationships: responseRelationships } = entity

  if (!responseRelationships) return undefined

  let relationships = {}

  map(keys(responseRelationships), type => {
    type = camelCase(type);
    relationships[type] = duplicateRelationships(responseRelationships[type].data)
  });

  return relationships
}

function duplicateRelationships (relationships) {
  if (isArray(relationships)) {
    return [...relationships]
  } else {
    return {...relationships}
  }
}

export default normalize;
