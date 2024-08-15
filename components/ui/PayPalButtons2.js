"use client";

import { config } from "@/constans/config";
import { useEffect, useRef, useState } from "react";

const PayPalButtons2 = ({ price, courseId, setCourse }) => {
  const [render, setRender] = useState(false);

  console.log({ url: config.BASE_BACKEND_URL });
  const paypalRef = useRef();

  const renderPaypalButtons = () => {
    paypal
      .Buttons({
        // order is created on the server and the order id is returned
        createOrder: (data, actions) => {
          const token = localStorage.getItem("token")
         // console.log(token)

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
            //use the body param to optionallle pass addiontional order inofrmation
            // like product ids or amount
          })
            .then((response) => response.json())
            .then((order) => order.id);
        },
        //sfjkfsjklfsjskljkfljklfjfslksjklfjsfkljkfl

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
              //kslñfklñdskñlsfkñlfskñlfsdkfdsñlkfñl
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

  useEffect(() => {
    if (render && courseId) {
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
          <h2 style={{ marginRight: "2rem " }}>{price}</h2>
          <button onClick={renderPaypalButtons}>$</button>
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

export default PayPalButtons2;
