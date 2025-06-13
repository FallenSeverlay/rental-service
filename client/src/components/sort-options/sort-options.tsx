import { SortOffersType } from "../../const";
import { useEffect, useRef, useState, KeyboardEvent } from "react";
import classNames from 'classnames';
import { SortOffer } from "../../types/sort";

type SortPlacesProps = {
    activeSorting: SortOffer,
    onChange: (newSorting: SortOffer) => void;
}

function SortOptions({ activeSorting, onChange }: SortPlacesProps) {
  const [visible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLFormElement>(null);

  function keyDownHandler(evt: KeyboardEvent) {
    if (evt.key === 'Escape' && isOpen) {
      evt.preventDefault();
      setIsOpen(false);
    }
  }

  function toggleDropdown() {
    setIsOpen(open => !open);
  }

  function sortingItemClickHandler(type: SortOffer) {
    onChange(type);
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {visible && (
        <form
          className="places__sorting"
          action="#"
          method="get"
          onKeyDown={keyDownHandler}
          ref={containerRef}
        >
          <span className="places__sorting-caption">Sort by </span>
          <span
            className="places__sorting-type"
            tabIndex={0}
            onClick={toggleDropdown}
          >
            {activeSorting}
            <svg className="places__sorting-arrow" width="7" height="4">
              <use href="#icon-arrow-select" />
            </svg>
          </span>

          {isOpen && (
            <ul className="places__options places__option--custom">
              {Object.values(SortOffersType).map((type) => (
                <li
                  key={type}
                  className={classNames(
                    'places__option',
                    { 'places__option--active': type === activeSorting }
                  )}
                  tabIndex={0}
                  onClick={() => sortingItemClickHandler(type as SortOffer)}
                >
                  {type}
                </li>
              ))}
            </ul>
          )}
        </form>
      )}
    </>
  );
}

export { SortOptions };