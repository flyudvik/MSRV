import * as types from '../constants/ActionTypes'


export const addProcess = (priority, size) => ({type: types.ADD_PROCESS, size, priority});
export const removeProcess = id => ({type: types.REMOVE_PROCESS, id});
export const viewProcess = id => ({type: types.VIEW_PROCESS, id});

export const clearAll = () => ({type: types.CLEAR_ALL});
export const defragment = () => ({type: types.DEFRAGMENT});

export const viewSegment = id => ({type: types.VIEW_SEGMENT, id});
export const removeSegment = id => ({type: types.REMOVE_SEGMENT, id});

export const viewDescriptor = id => ({type: types.VIEW_DESCRIPTOR, id});
export const viewDescriptorTable = () => ({type: types.VIEW_DESCRIPTOR_TABLE});
