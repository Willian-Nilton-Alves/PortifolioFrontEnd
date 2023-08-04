import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#010F09] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Willian Alves, nice to meet you.</p>
          </div>
          <div>
            <p>
              Olá, sou um Desenvolvedor Web Front End e estudante de Back End
              apaixonado em fazer minhas aplicações funcionarem da maneira
              correta. Estou em busca da minha primeira oportunidade no mercado
              de tecnologia, em um ambiente diverso e com oportunidade de
              crescimento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
