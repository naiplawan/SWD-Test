import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hydrate } from '@/store/formSlice';
import { RootState } from '@/store';

export const useFormHydration = () => {
  const dispatch = useDispatch();
  const isHydrated = useSelector((state: RootState) => state.form.isHydrated);

  useEffect(() => {
    if (!isHydrated) {
      dispatch(hydrate());
    }
  }, [dispatch, isHydrated]);

  return isHydrated;
};
