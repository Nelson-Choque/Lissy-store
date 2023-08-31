import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./App.css";
import Product from "./model/Producto";

function App() {
  const product: Product = new Product("1", "polo", "polo guchi", 13.0);
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  };
  return (
    <>
      <div className="max-w-screen-2xl mx-auto p-4">
        <h2 className="text-3xl font-bold">Products</h2>
        <p className="">you can find all products in our store</p>
        <section className="flex gap-4 flex-wrap justify-center">
          <Swiper
            breakpoints={breakpoints}
            spaceBetween={16}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="swiperProducts"
          >
            <SwiperSlide>{CardProduct(product)}</SwiperSlide>

            <SwiperSlide>{CardProduct(product)}</SwiperSlide>

            <SwiperSlide>{CardProduct(product)}</SwiperSlide>
            <SwiperSlide>{CardProduct(product)}</SwiperSlide>
            <SwiperSlide>{CardProduct(product)}</SwiperSlide>
            <SwiperSlide>{CardProduct(product)}</SwiperSlide>
          </Swiper>
        </section>
      </div>
      {/* ---------categories */}
      <div className="max-w-screen-2xl mx-auto p-4">
        <h2 className="text-3xl font-bold">Categories</h2>
        <p className="">you can find all categories in our store</p>
        <section className="flex gap-4 flex-wrap justify-center">
          <Swiper
            breakpoints={breakpoints}
            spaceBetween={16}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="swiperProducts"
          >
            <SwiperSlide>{CardProduct(product)}</SwiperSlide>

            <SwiperSlide>{CardProduct(product)}</SwiperSlide>

            <SwiperSlide>{CardProduct(product)}</SwiperSlide>
            <SwiperSlide>{CardProduct(product)}</SwiperSlide>
            <SwiperSlide>{CardProduct(product)}</SwiperSlide>
            <SwiperSlide>{CardProduct(product)}</SwiperSlide>
          </Swiper>
        </section>
      </div>
      {/* -------novedades */}
      <div className="max-w-screen-2xl mx-auto p-4">
        <h2 className="text-3xl font-bold">Novedades</h2>
        <p className="">you can find all novedades in our store</p>
        <section className="flex gap-4 flex-wrap justify-center">
          <Swiper
            breakpoints={breakpoints}
            spaceBetween={16}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="swiperProducts"
          >
            <SwiperSlide>{CardProduct(product)}</SwiperSlide>

            <SwiperSlide>{CardProduct(product)}</SwiperSlide>

            <SwiperSlide>{CardProduct(product)}</SwiperSlide>
            <SwiperSlide>{CardProduct(product)}</SwiperSlide>
            <SwiperSlide>{CardProduct(product)}</SwiperSlide>
            <SwiperSlide>{CardProduct(product)}</SwiperSlide>
          </Swiper>
        </section>
      </div>
    </>
  );
}

function CardProduct(product: Product) {
  return (
    <div className="card w-72 bg-base-100 shadow-xl m-4">
      <figure>
        <img
          className="h-80 object-cover w-full object-center"
          src="https://mister-mango.omni.la/ProductCatalog/Workspace.CWDQQL6GUIJMS/ProductCatalog.C2RTDIMIW67G6/500x500/C2RTJZMMHNKEE.jpg"
          alt="t-shirt"
        />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <p className="text-xl">
          <strong>
            S/
            {product.price}{" "}
          </strong>
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-block">Compra ahora</button>
        </div>
      </div>
    </div>
  );
}

export default App;
