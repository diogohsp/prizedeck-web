import { isAxiosError } from "axios";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { HeaderViewModel } from "@/components/header/HeaderViewModel";
import { SideBarMenuViewModal } from "@/components/sidebar-menu/SideBarMenuViewModel";

import { api } from "@/lib/axios";

import "./app.css";

export function AppLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    // response.use() tem 2 resposta a 1 é quando da sucesso, e a segunda quando ocorre algum erro
    const interceptorID = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status;
          const code = error.response?.data.code;

          if (status === 401 && code === "UNAUTHORIZED") {
            // replace não deixa ele voltar pelo botao "voltar" do navegador
            navigate("/sign-in", { replace: true });
          }
        }
      }
    );

    // todo useEffect caso eu esteja criando um listener eu tenho que limpar esse listener no final, para caso o componente seja desmontado o useffect deve fazer a limpeza dos eventListener
    return () => {
      api.interceptors.response.eject(interceptorID);
    };
  }, [navigate]);

  return (
    <>
      <div className="grid_container min-h-full w-full antialiased">
        <div className="header w-full">
          <HeaderViewModel />
        </div>
        <div className="menu" >
          <SideBarMenuViewModal />
        </div>
        <div className="content bg-secondary flex flex-1 flex-col gap-4 p-8 pt-6">
          <Outlet />
        </div>
        <div className="bg-primary border-t-4 border-t-thertiary min-h-10 footer flex items-center justify-center">
          <i className="text-sm">Developed by <a href="https://www.linkedin.com/in/diogohsp" target="_blank" rel="noopener noreferrer">Diogo</a> © 2024</i>
        </div>
      </div>
    </>
  );
}
