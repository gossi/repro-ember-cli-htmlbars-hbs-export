# repro-ember-cli-htmlbars-hbs-export

Repro case for [`Error: Can't resolve 'fs'`](https://github.com/ember-cli/ember-cli-htmlbars/issues/374)

## Instructions

1. Clone repo
2. Install: `yarn`
3. Start: `yarn storybook``
4. See error messages on the console

Related file: `stories/index.js` - also contains the toggle for the _old_
import path which enables the functionality (considered as workaround).
