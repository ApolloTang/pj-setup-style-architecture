import _ from 'lodash';

const array_to_IndexirizedObj = (resources_arrays) => {
  const out = _(resources_arrays).reduce( (acc, item) => {
    acc[item._id] = item;
    return acc;
  }, {});
  return out;
};

export {array_to_IndexirizedObj};
