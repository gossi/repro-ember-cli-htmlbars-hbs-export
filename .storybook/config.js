import { configure } from '@storybook/ember';

// const loadStories = () => {
//   const req = ;

//   return [
//     ...req.keys().map(name => req(name))
//   ];
// };

configure(require.context('../stories', true, /\.js$/), module);
