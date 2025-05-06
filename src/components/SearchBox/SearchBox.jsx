import css from './SearchBox.module.css';

const SearchBox = ({ value, onFilter }) => {
  return (
    <div className={css.wrapper}>
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={onFilter}
          className={css.input}
          placeholder="Start typing..."
        />
      </label>
    </div>
  );
};

export default SearchBox;
