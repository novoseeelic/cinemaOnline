import { useState, useRef, useCallback, useEffect } from "react";
import RootStore from "../store/RootStore";
import { useMoviesBySearch } from "./useMoviesBySearch";

export function useSearch() {
  const { movies, isFetching, setSearchRequest } = useMoviesBySearch();
  const [showResults, setShowResults] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const activeAsModal = RootStore.search.isActive;

  const handleInput = (value: string) => {
    setInputValue(value);
    setSearchRequest(value);
    setShowResults(value.length > 0);
  }

  const handleReset = () => {
    setInputValue('');
    setSearchRequest(undefined);
    setShowResults(false);
    if (activeAsModal) {
      RootStore.search.setActive(false);
    }
  }

  const handleClickMovie = useCallback(() => {
    setInputValue('');
    setSearchRequest(undefined);
    setShowResults(false);
  }, []);

  useEffect(() => {
    if (activeAsModal && inputRef.current) {
      inputRef.current.focus();
    };
  }, [activeAsModal]);

  return { movies, isFetching, showResults, inputValue, inputRef, activeAsModal, handleInput, handleReset, handleClickMovie };
}