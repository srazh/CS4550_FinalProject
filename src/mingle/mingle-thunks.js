import {createAsyncThunk} from "@reduxjs/toolkit";
import {createMingle, deleteMingle} from "./mingle-service.js";
import * as service
  from "./mingle-service"

export const createMingleThunk = createAsyncThunk(
    'createMingle',
    (newMingle) => createMingle(newMingle)
)

export const findAllMingleThunk = createAsyncThunk(
    'findAllMingle',
    async () => await service.findAllMingle()
)

export const updateMingleThunk = {}

export const deleteMingleThunk = createAsyncThunk(
    'deleteMingle',
    (mid) => deleteMingle(mid)
)