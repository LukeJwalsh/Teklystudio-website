import { PiCheckCircleFill } from "react-icons/pi";
import { plans } from "../data";
import Link from "next/link";
const Plans = () => {
  return (
    <section
      id="pricing"
      className="rounded-3x1 w-full py-20 bg-white antialiased relative overflow-hidden"
    >
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-5xl pb-10 md:pb-20 text-black px-6 text-center">
          Pricing Plans <br /> Built For Scale
        </h2>

        <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-10 items-start">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="h-full flex flex-col justify-between border border-neutral-200 shadow-lg rounded-3xl px-6 bg-white"
            >
              <div className={plan.style}>
                <div className="text-4xl flex items-center font-semibold text-black">
                  {plan.name}
                </div>
                <div className="text-3xl pt-6 text-black">{plan.price}</div>
                <div className="py-6 text-neutral-800">{plan.description}</div>

                <ul>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-lg py-2 flex items-center text-black"
                    >
                      <PiCheckCircleFill className="text-blue-500 mr-2 text-xl" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                {index === 0 && (
                  <Link
                    href="#"
                    className="rounded-3xl my-4 py-2 text-white w-full mx-auto flex justify-center bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Buy Now
                  </Link>
                )}
                {index === 1 && (
                  <Link
                    href="#"
                    className="rounded-3xl my-4 py-2 text-white w-full mx-auto flex justify-center bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Buy Now
                  </Link>
                )}
                {index === 2 && (
                  <Link
                    href="/contact"
                    className="rounded-3xl my-4 py-2 text-white w-full mx-auto flex justify-center bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Contact Us
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;