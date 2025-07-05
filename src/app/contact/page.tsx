import { NavBar } from "../../../components/NavBar";
export default function Contact() {
    return (
      <div className="relative min-h-screen">
        {/* Background Image with Black Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('/palm-trees.svg')` }}
          >
            <div className="w-full h-full bg-[var(--port-blue)]/60" />
          </div>
        </div>
  
        {/* Foreground Content */}
        <div className="relative z-10">
          <NavBar />
          <div className="flex flex-col justify-center items-center font-anta">
            <div className="bg-[var(--port-white)] mt-12 h-[500px] w-[700px] shadow-2xl rounded-lg flex flex-col items-center">
                <h1 className="text-4xl text-[var(--port-blue)] my-12">Contact Me</h1>
                <form className="flex flex-col text-[var(--port-blue)]/70 gap-12 w-3/4">
                    <input 
                        className="border-b-1 ps-2"
                        type="text"
                        id="name"
                        name="name"
                        // value={formData.name}
                        // onChange={handleChange}
                        placeholder="Name"
                        required
                    />
                    <input
                        className="border-b-1 ps-2"
                        type="email"
                        id="email"
                        name="email"
                        // value={formData.email}
                        // onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                    <textarea
                        className="border-b-1 ps-2 min-h-[100px] max-h-[100px]"
                        id="message"
                        name="message"
                        // value={formData.message}
                        // onChange={handleChange}
                        placeholder="Message"
                        required
                    />
                    <div className="flex flex-col items-center justify-center">
                        <button className="bg-[var(--light-blue)] text-[var(--port-purple)] border border-[var(--port-purple)] rounded-sm w-36 h-12 font-roboto" type="submit" >
                            Holla at ya boy
                        </button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  