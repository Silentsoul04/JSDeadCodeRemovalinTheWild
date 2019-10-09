export default function getProps<T>(props: { properties?: T }): T {
  // Save Return
  if (!props.properties) {
    return {} as T;
  }

  return props.properties;
}
