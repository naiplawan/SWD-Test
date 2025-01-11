import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormData {
  id: string;
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

interface FormState {
  submissions: FormData[];
  currentPage: number;
  pageSize: number;
  selectedSubmission: FormData | null;
  isHydrated: boolean;
}

const saveToLocalStorage = (state: FormState) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('formData', JSON.stringify(state));
  }
};

const initialState: FormState = {
  submissions: [],
  currentPage: 1,
  pageSize: 5,
  selectedSubmission: null,
  isHydrated: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    hydrate: (state) => {
      if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('formData');
        if (saved) {
          const parsed = JSON.parse(saved);
          state.submissions = parsed.submissions || [];
          state.currentPage = parsed.currentPage || 1;
          state.pageSize = parsed.pageSize || 5;
        }
      }
      state.isHydrated = true;
    },
    resetForm: (state) => {
      state.submissions = [];
      state.currentPage = 1;
      state.selectedSubmission = null;
      state.isHydrated = true;
      saveToLocalStorage(state);
    },
    addSubmission: (state, action: PayloadAction<FormData>) => {
      state.submissions.push(action.payload);
      saveToLocalStorage(state);
    },
    deleteSubmission: (state, action: PayloadAction<string>) => {
      state.submissions = state.submissions.filter((item) => item.id !== action.payload);
      saveToLocalStorage(state);
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSelectedSubmission: (state, action: PayloadAction<FormData | null>) => {
      state.selectedSubmission = action.payload;
    },
    editSubmission: (state, action: PayloadAction<FormData>) => {
      const index = state.submissions.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.submissions[index] = action.payload;
        saveToLocalStorage(state);
      }
    },
  },
});

export const {
  hydrate,
  addSubmission,
  deleteSubmission,
  setCurrentPage,
  resetForm,
  setSelectedSubmission,
  editSubmission,
} = formSlice.actions;

export default formSlice.reducer;
