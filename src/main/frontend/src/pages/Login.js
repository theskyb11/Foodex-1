import React, {useEffect, useState} from 'react';
import '../features/authentication/assets/login.css';
import logo from "../assets/img/logo-exp-light.png";
import {Link, useNavigate} from "react-router-dom";
import highlight from "../features/authentication/assets/highlight.jpg";
import {signInUser} from "../features/authentication/services/loginUser";
import {toast} from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState('');
  const [remember, setRemember] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const previousLink = localStorage.getItem('previousLink');

    if (isLoggedIn === 'true') {
      setTimeout(() => {
        window.location.href = previousLink
      }, 1000)
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    signInUser(email, password)
        .then((response) => {
          if (response) {
            localStorage.setItem('isLoggedIn', true);

            if (remember) {
              localStorage.setItem('email', email);
              localStorage.setItem('remember', true);
            } else {
              localStorage.removeItem('email');
              localStorage.removeItem('remember');
            }

            toast.success('Sign in successful!');
          } else {
            toast.error('Email or Password is incorrect!');
            console.log('Sign-in failed');
          }
        })
        .catch((error) => {
          toast.error('Error while signing in!');
          console.error('Error while signing in:', error);
        });
  };

  return (
      <div className={"parent-container m-auto grid grid-cols-2 max-md:grid-cols-1 h-screen"}>
        <div className={"tile h-full"}>
          <div className={"flex flex-col items-center justify-center h-full"}>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto scale-50"
                     src={logo}
                     alt="Foodex" />
                <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign
                  in to your account</h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className={"flex flex-col items-center justify-center"}>
                  <button
                      className="flex items-center bg-white border border-gray-300 rounded-lg max-w-xs px-6 py-2 mb-4 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none">
                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink"
                         viewBox="-0.5 0 48 48" version="1.1">

                      <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Color-" transform="translate(-401.000000, -860.000000)">
                          <g id="Google" transform="translate(401.000000, 860.000000)">
                            <path
                                d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                id="Fill-1" fill="#FBBC05"></path>
                            <path
                                d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                id="Fill-2" fill="#EB4335"></path>
                            <path
                                d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                id="Fill-3" fill="#34A853"></path>
                            <path
                                d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                id="Fill-4" fill="#4285F4"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span>Continue with Google</span>
                  </button>

                  <button
                      className="flex items-center bg-white border border-gray-300 rounded-lg max-w-xs px-6 py-2 mb-4 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none">
                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink"
                         viewBox="0 -4 48 48" version="1.1">
                      <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Color-" transform="translate(-300.000000, -164.000000)"
                           fill="#00AAEC">
                          <path
                              d="M348,168.735283 C346.236309,169.538462 344.337383,170.081618 342.345483,170.324305 C344.379644,169.076201 345.940482,167.097147 346.675823,164.739617 C344.771263,165.895269 342.666667,166.736006 340.418384,167.18671 C338.626519,165.224991 336.065504,164 333.231203,164 C327.796443,164 323.387216,168.521488 323.387216,174.097508 C323.387216,174.88913 323.471738,175.657638 323.640782,176.397255 C315.456242,175.975442 308.201444,171.959552 303.341433,165.843265 C302.493397,167.339834 302.008804,169.076201 302.008804,170.925244 C302.008804,174.426869 303.747139,177.518238 306.389857,179.329722 C304.778306,179.280607 303.256911,178.821235 301.9271,178.070061 L301.9271,178.194294 C301.9271,183.08848 305.322064,187.17082 309.8299,188.095341 C309.004402,188.33225 308.133826,188.450704 307.235077,188.450704 C306.601162,188.450704 305.981335,188.390033 305.381229,188.271578 C306.634971,192.28169 310.269414,195.2026 314.580032,195.280607 C311.210424,197.99061 306.961789,199.605634 302.349709,199.605634 C301.555203,199.605634 300.769149,199.559408 300,199.466956 C304.358514,202.327194 309.53689,204 315.095615,204 C333.211481,204 343.114633,188.615385 343.114633,175.270495 C343.114633,174.831347 343.106181,174.392199 343.089276,173.961719 C345.013559,172.537378 346.684275,170.760563 348,168.735283"
                              id="Twitter">

                          </path>
                        </g>
                      </g>
                    </svg>

                    <span>Continue with Twitter</span>
                  </button>

                  <button
                      className="flex items-center bg-white border border-gray-300 rounded-lg max-w-xs px-6 py-2 mb-4 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none">
                    <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink"
                         viewBox="-1.5 0 20 20" version="1.1">
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Dribbble-Light-Preview"
                           transform="translate(-102.000000, -7439.000000)" fill="#000000">
                          <g id="icons" transform="translate(56.000000, 160.000000)">
                            <path
                                d="M57.5708873,7282.19296 C58.2999598,7281.34797 58.7914012,7280.17098 58.6569121,7279 C57.6062792,7279.04 56.3352055,7279.67099 55.5818643,7280.51498 C54.905374,7281.26397 54.3148354,7282.46095 54.4735932,7283.60894 C55.6455696,7283.69593 56.8418148,7283.03894 57.5708873,7282.19296 M60.1989864,7289.62485 C60.2283111,7292.65181 62.9696641,7293.65879 63,7293.67179 C62.9777537,7293.74279 62.562152,7295.10677 61.5560117,7296.51675 C60.6853718,7297.73474 59.7823735,7298.94772 58.3596204,7298.97372 C56.9621472,7298.99872 56.5121648,7298.17973 54.9134635,7298.17973 C53.3157735,7298.17973 52.8162425,7298.94772 51.4935978,7298.99872 C50.1203933,7299.04772 49.0738052,7297.68074 48.197098,7296.46676 C46.4032359,7293.98379 45.0330649,7289.44985 46.8734421,7286.3899 C47.7875635,7284.87092 49.4206455,7283.90793 51.1942837,7283.88393 C52.5422083,7283.85893 53.8153044,7284.75292 54.6394294,7284.75292 C55.4635543,7284.75292 57.0106846,7283.67793 58.6366882,7283.83593 C59.3172232,7283.86293 61.2283842,7284.09893 62.4549652,7285.8199 C62.355868,7285.8789 60.1747177,7287.09489 60.1989864,7289.62485"
                                id="apple-[#173]">

                            </path>
                          </g>
                        </g>
                      </g>
                    </svg>

                    <span>Continue with Apple</span>
                  </button>
                </div>

                <p className={"text-gray-700 flex items-center justify-center mb-4"}>Or</p>

                <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
                  <div>
                    <label htmlFor="email"
                           className="block text-sm font-medium leading-6 text-gray-900">Email
                      address</label>
                    <div className="mt-2">
                      <input id="email" name="email" type="email" autoComplete="email" required
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                             className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password"
                             className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                      <div className="text-sm">
                        <Link to={"/forgot"} className="font-semibold text-blue">Forgot
                          password?</Link>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input id="password" name="password" type="password"
                             autoComplete="current-password" required
                             value={password}
                             onChange={(e) => setPassword(e.target.value)}
                             className="block w-full rounded-md px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6" />
                    </div>

                    <input id="default-checkbox" type="checkbox"
                           value={remember}
                           onChange={(e) => setRemember(e.target.value)}
                           className="w-4 h-4 mt-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-700">Remember Me</label>
                  </div>

                  <div>
                    <button type="submit"
                            className="flex w-full justify-center rounded-md bg-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm">Sign
                      in
                    </button>
                  </div>
                </form>

                <p className="mt-4 text-center text-sm text-gray-500">
                  Not a member?
                  <Link to={"/register"} className="font-semibold leading-6 text-blue"> Create a new Account</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-l_light_grey h-full block max-md:hidden">
          <img src={highlight} className={"h-screen w-full object-cover"} alt={"Highlight"} />
        </div>
      </div>
  );
};

export default Login;
