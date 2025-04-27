import { ArrowRight } from 'lucide-react';
import PropTypes from 'prop-types';

export function Heading({ headingTitle }) {
  return (
    <button className="px-4 py-2 bg-white border dark:border-[#172635] rounded-lg mb-8 flex items-center gap-2 dark:bg-dark-lite">
      <ArrowRight /> {headingTitle}
    </button>
  );
}

Heading.propTypes = {
  headingTitle: PropTypes.string.isRequired,
};
