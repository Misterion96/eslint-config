/**
 * @typedef {import('eslint').Linter.Config} Config
 * @typedef {import('eslint').Linter.RuleSeverity} RuleSeverity
 */

/**
 * @param {Config[]} configs settings of rule
 * @returns {Config[]} patched settings of rule
 */
export function swapWarnToError(configs) {
  return configs.map(({ rules = {}, ...restConfigSettings }) => {
    return {
      ...restConfigSettings,
      rules: mapRules(rules),
    };
  });
}

/**
 * @param {Config['rules']} rules settings of rule
 * @returns {Config['rules']} patched settings of rule
 */

function mapRules(rules) {
  const entries = Object.entries(rules).map(([key, value]) => [key, setError(value)]);

  return Object.fromEntries(entries);
}

/**
 * @param {RuleSeverity} state
 * @returns {RuleSeverity} updatedState
 */

function convertToError(state) {
  if (state === 1 || state === 'warn') {
    return 'error';
  }

  return state;
}
/**
 * @param {RuleEntry} value settings of rule
 * @returns {RuleEntry} patched settings of rule
 */
function setError(value) {
  if (Array.isArray(value)) {
    const [state, ...settings] = value;

    return [convertToError(state), ...settings];
  }

  return convertToError(value);
}
