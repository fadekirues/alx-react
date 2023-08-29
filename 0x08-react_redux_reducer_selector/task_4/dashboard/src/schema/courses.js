import { schema, normalize } from 'normalizr';

const courseSchema = new schema.Entity('courses');

export function coursesNormalizer(data) {
  const normalizedData = normalize(data, [courseSchema]);
  return normalizedData;
}
