export const getTestMode = () => {
  const testMode = localStorage.getItem('ea_test_mode') === 'true'
  return testMode
}
