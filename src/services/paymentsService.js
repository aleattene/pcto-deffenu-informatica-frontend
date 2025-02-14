import axios from "axios";

const API_BASE_URL = "http://localhost:8000/";
const API_VERSION = "api/v1/";
const APP = "payments/";
const URL = `${API_BASE_URL}${API_VERSION}${APP}`;

const PAYMENTS_ENDPOINT = "payments/";

const API_PAYMENTS = `${URL}${PAYMENTS_ENDPOINT}`;

const paymentsService = {
  // PAYMENTS

  // Read Payments
  getPayments: async () => {
    const response = await axios.get(`${API_PAYMENTS}`);
    return response.data;
  },

  // Create Payment
  createPayment: async (payment) => {
    const response = await axios.post(`${API_PAYMENTS}`, payment);
    return response.data;
  },

  // Update Payment
  updatePayment: async (id, updatedPayment) => {
    const response = await axios.put(`${API_PAYMENTS}${id}/`, updatedPayment);
    return response.data;
  },

  // Delete Payment
  deletePayment: async (id) => {
    const response = await axios.delete(`${API_PAYMENTS}${id}/`);
    return response.data;
  },

  // Read Payment by ID
  getPaymentByID: async (id) => {
    const response = await axios.get(`${API_PAYMENTS}${id}/`);
    return response.data;
  },
};

export default paymentsService;
