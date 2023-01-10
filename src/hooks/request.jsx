/* eslint-disable no-async-promise-executor */
/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';

import { api } from '../services/api';

const Request = createContext();

function RequestProvider({ children }) {
  async function manageRequests(type, resource, infos = null) {
    const availableRequests = {
      get: () =>
        new Promise(async (resolve, reject) => {
          try {
            const response = await api.get(resource);

            resolve(response);
          } catch (error) {
            reject(error);
          }
        }),
      post: () =>
        new Promise(async (resolve, reject) => {
          try {
            const response = await api.post(resource, infos);

            resolve(response);
          } catch (error) {
            reject(error);
          }
        }),
      put: () =>
        new Promise(async (resolve, reject) => {
          try {
            const response = await api.put(resource, infos);

            resolve(response);
          } catch (error) {
            reject(error);
          }
        }),
      delete: () =>
        new Promise(async (resolve, reject) => {
          try {
            const response = await api.delete(resource);

            resolve(response);
          } catch (error) {
            reject(error);
          }
        }),
      patch: () =>
        new Promise(async (resolve, reject) => {
          try {
            const response = await api.patch(resource, infos);

            resolve(response);
          } catch (error) {
            reject(error);
          }
        }),
    };

    const manageResponseTime = () =>
      new Promise(resolve => {
        const limitTime = 60 * 1000;

        setTimeout(() => {
          const maximumTimeExceeded = new Error(
            'Maximum response time has been exceeded!'
          );

          resolve(maximumTimeExceeded);
        }, limitTime);
      });

    const requisitionExecuted = availableRequests[type];

    if (requisitionExecuted) {
      const resultOfRequest = await Promise.race([
        requisitionExecuted(),
        manageResponseTime(),
      ]);

      return resultOfRequest;
    }
  }

  return (
    <Request.Provider value={{ manageRequests }}>{children}</Request.Provider>
  );
}

function useRequest() {
  const context = useContext(Request);

  return context;
}

export { RequestProvider, useRequest };
