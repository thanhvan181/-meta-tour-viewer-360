import {StoreDispatch} from '@/store/configureStore';
import {StoreGetState} from './configureStore';
import {TypedUseSelectorHook, useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<StoreGetState> = useSelector;
export const useAppDispatch = () => useDispatch<StoreDispatch>();
