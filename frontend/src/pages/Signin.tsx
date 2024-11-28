import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export const Signin = () => {
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Auth type="signin" key="signin-auth" />
            </div>
            <div className="hidden lg:block">
                <Quote key="quote" />
            </div>
        </div>
    </div>
}