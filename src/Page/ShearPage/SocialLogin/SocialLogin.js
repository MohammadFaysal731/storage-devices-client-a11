import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { FiLogIn } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebaseConfig.init';
import Loading from '../Loading/Loading';
const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    if (googleUser) {
        navigate(from, { replace: true });
    }
    if (googleError) {
        errorElement = <p className='text-danger'>{googleError?.message}</p>
    }
    if (googleLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="">
                <p className='text-center fs-4'>or</p>
            </div>
            {errorElement}
            <div className="">
                <button onClick={() => signInWithGoogle()} className="btn btn-outline-dark w-100">
                    <FcGoogle className='fs-4 mx-2'></FcGoogle>Google Sing in<FiLogIn className='mx-2'></FiLogIn>
                </button>
            </div>
        </div >
    );
};

export default SocialLogin;