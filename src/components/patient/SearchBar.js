/**
 * SearchBar.js
 * -------------
 * Text search + critical-filter toggle.
 *
 * Hooks demonstrated: (receives callbacks from parent,
 * keeps the component "dumb" / presentational)
 */
import {
  SearchContainer,
  SearchTitle,
  SearchInput,
  FilterButton,
} from '../../styles/SearchBarStyles';

const SearchBar = ({
  searchText,
  onSearchChange,
  criticalFilter,
  onToggleCriticalFilter,
}) => {
  return (
    <SearchContainer>
      <SearchTitle>🔍 Search &amp; Filter</SearchTitle>

      <SearchInput
        type="text"
        placeholder="Search patient by name…"
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <FilterButton
        type="button"
        $active={criticalFilter}
        onClick={onToggleCriticalFilter}
      >
        🚨 {criticalFilter ? 'Show All' : 'Critical Only'}
      </FilterButton>
    </SearchContainer>
  );
};

export default SearchBar;