import { services } from "./servicesData";

export default function WhatIDo() {
  return (
    <section id="whatido" className="md:mt-6">
      <h2 className="text-3xl font-bold mb-6">O que eu faço</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
