"use client";

import { useEffect, useRef, useState } from "react";
import { config } from "@/constans/config";
import Swal from "sweetalert2";

const PayPalButtons = ({ price, courseId, setCourse }) => {
  const [render, setRender] = useState(false);
  //const [alreadyRendered, setAlreadyRendered] = useState(false);
  const paypalRef = useRef();

  //console.log({ url: config.BASE_BACKEND_URL });
  const renderPaypalButtons = () => {
    paypal
      .Buttons({
        //Order is creates on the server and the order id is returned
        createOrder: (data, actions) => {
          const token = localStorage.getItem("token");

          return fetch(`${config.BASE_BACKEND_URL}/paypal/orders`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              courseId,
              price,
            }),
          })
            .then((response) => response.json())
            .then((order) => order.id);
        },
        //jksdjlksjdlksjkdjlksdjlksdjksdlssdsda
        onApprove: (data, actions) => {
          const token = localStorage.getItem("token");
          return fetch(
            `${config.BASE_BACKEND_URL}/paypal/orders/${data.orderID}/capture`,
            {
              method: "post",
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({ price }),
            }
          )
            .then((response) => response.json())
            .then((capture_id) => {
              //Successful Capture! for dev/demo purposes:
              Swal.fire({
                title: "Excelente",
                html: "Ya puedes comenzar con el curso😀",
                icon: "success",
                confirmButtonText: "Excelente 👏",
                timer: 3000,
              });
              setCourse((oldCourseData) => ({
                ...oldCourseData,
                hasBoughtTheCourse: true,
                capture_id,
              }));
            });
        },
        style: { color: "blue" },
      })
      .render(paypalRef.current);
  };

   //const handleBuy = () => {
  // const paypalButton = document.querySelector(".paypal-button")
   //paypalButton.click() }

  useEffect(() => {
    if (render && courseId) {
      console.log("RENDER")
      renderPaypalButtons();
    } else {
      setRender(true);
    }
  }, [render, courseId]);
  console.log({ price });

  return (
    <>
      <div
        className="df aic mt20 mb20 cblack"
        style={{
          backgroundColor: "white",
          padding: "1rem",
          borderRadius: "0.5rem",
        }}
      >
        <h2 style={{ marginRight: "2rem " }}>${price}</h2>
        <button onClick={renderPaypalButtons}>comprar</button>
        <div ref={paypalRef}></div>
      </div>
      <style jsx>{`
        .dom-ready {
          background-color: red;
        }
      `}</style>
    </>
  );
};

export default PayPalButtons;
