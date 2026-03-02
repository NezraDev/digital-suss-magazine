import React from "react";
import Header from "../components/Header";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-page-background bg-opacity-50 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] bg-size-[20px_20px]">
      <Header />
      <main className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <h1 className="text-5xl md:text-6xl font-black text-center text-page-text mb-8">
          About Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui
              blandit praesent luptatum zzril delenit augue duis dolore te
              feugait nulla facilisi.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((member) => (
              <div
                key={member}
                className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200 text-center"
              >
                <div className="w-24 h-24 mx-auto bg-accent-mint rounded-full flex items-center justify-center text-4xl font-bold text-page-dark mb-4">
                  {String.fromCharCode(64 + member)}
                </div>
                <h3 className="font-bold text-xl">Team Member {member}</h3>
                <p className="text-gray-600">Title</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
