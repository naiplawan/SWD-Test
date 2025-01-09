import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  title: string;
  firstName: string;
  lastName: string;
  birthday: string;
  nationality: string;
  citizenID?: string;
  gender: string;
  mobilePhone: string;
  passportNo?: string;
  expectedSalary: number;
}

const initialState: FormState = {
  title: '',
  firstName: '',
  lastName: '',
  birthday: '',
  nationality: '',
  gender: '',
  mobilePhone: '',
  expectedSalary: 0,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<FormState>) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { updateForm, resetForm } = formSlice.actions;
export default formSlice.reducer;
