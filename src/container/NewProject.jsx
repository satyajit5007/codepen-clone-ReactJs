import React, { useState, useEffect } from "react";
import { FaHtml5, FaChevronDown, FaJs, FaCss3 } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import SplitPane from "react-split-pane";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MdCheck, MdEdit } from "react-icons/md";
import { Logo } from "../assets";
import { useSelector } from "react-redux";
import { Alert, UserProfileDetails } from "../components";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase.config";

const NewProject = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [output, setOutput] = useState("");

  const [title, setTitle] = useState("Untitled");
  const [isTitle, setisTitle] = useState("");
  const [alert, setAlert] = useState(false);

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const updateOutput = () => {
      const combinedOutput = `
        <html>
          <head>
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>${js}</script>
          </body>
        </html>
      `;
      setOutput(combinedOutput);
    };

    updateOutput();
  }, [html, css, js]);

  const saveProgram = async () => {
    const id = `${Date.now()}`;
    const _doc = {
      id: id,
      title: title,
      html: html,
      css: css,
      js: js,
      output: output,
      user: user,
    };

    await setDoc(doc(db, "Projects", id), _doc)
    .then((res) => {
      setAlert(true);
      
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    });
  };

  return (
    <div className="w-screen h-screen flex flex-col items-start justify-start overflow-hidden">
      {/* alert section */}
      <AnimatePresence>
        {alert && <Alert status={"Success"} alertMsg={"Project Saved..."} />}
      </AnimatePresence>

      {/* header section */}
      <header className="w-full flex items-center justify-between px-12 py-4">
        <div className="flex items-center justify-center gap-6">
          <Link to="/home/projects">
            <img className="w-32 h-auto object-contain" src={Logo} alt="Logo" />
          </Link>
          <div className="flex flex-col items-start justify-start">
            {/* title */}
            <div className="flex items-center justify-center gap-3">
              <AnimatePresence>
                {isTitle ? (
                  <>
                    <motion.input
                      key="TitleInput"
                      type="text"
                      placeholder="Your Title"
                      className="px-3 py-2 rounded-md bg-transparent text-primaryText text-base outline-none border-none"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    <motion.p
                      key="titleLabel"
                      className="px-3 py-2 text-white text-lg"
                    >
                      {title}
                    </motion.p>
                  </>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isTitle ? (
                  <motion.div
                    key="MdCheck"
                    whileTap={{ scale: 0.9 }}
                    className="cursor-pointer"
                    onClick={() => setisTitle(false)}
                  >
                    <MdCheck className="text-2xl text-emerald-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="MdEdit"
                    whileTap={{ scale: 0.9 }}
                    className="cursor-pointer"
                    onClick={() => setisTitle(true)}
                  >
                    <MdEdit className="text-2xl text-primaryText" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* follow */}
            <div className="flex items-center justify-center px-3 -mt-2 gap-2">
              <p className="text-primaryText text-sm">
                {user?.displayName
                  ? user?.displayName
                  : `${user?.email.split("@")[0]}`}
              </p>
              <motion.p
                whileTap={{ scale: 0.9 }}
                className="text-[10px] bg-emerald-500 rounded-sm px-2 py-[1px] text-primary font-semibold cursor-pointer"
              >
                + Follow
              </motion.p>
            </div>
          </div>
        </div>
        {user && (
            <div className="flex items-center justify-center gap-4">
              <motion.button
              onClick={saveProgram}
                whileTap={{ scale: 0.9 }}
                className="px-6 py-4 bg-primaryText cursor-pointer text-base text-primary font-semibold rounded-md"
              >
                Save
              </motion.button>
              <UserProfileDetails />
            </div>
          )}
      </header>

      {/* coding section */}
      <div className="w-full h-full">
        {/* horizontal split */}
        <SplitPane
          split="horizontal"
          minSize={100}
          maxSize={-100}
          defaultSize={"50%"}
        >
          {/* top coding section */}
          <SplitPane split="vertical" minSize={500}>
            {/* html code */}
            <div className="w-full h-full flex flex-col items-start justify-start">
              <div className="w-full flex items-center justify-between">
                <div className="bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500">
                  <FaHtml5 className="text-xl text-red-500" />
                  <p className="text-primaryText font-semibold">HTML</p>
                </div>
                {/* icons */}
                <div className="cursor-pointer flex items-center justify-center gap-5 px-4">
                  <FcSettings className="text-xl" />
                  <FaChevronDown className="text-xl text-primaryText" />
                </div>
              </div>
              <div className="w-full px-2">
                <CodeMirror
                  value={html}
                  height="600px"
                  extensions={[javascript({ jsx: true })]}
                  onChange={(value, viewUpdate) => {
                    setHtml(value);
                  }}
                  theme={"dark"}
                />
              </div>
            </div>
            <SplitPane split="vertical" minSize={250}>
              {/* css code */}
              <div className="w-full h-full flex flex-col items-start justify-start">
                <div className="w-full flex items-center justify-between">
                  <div className="bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500">
                    <FaCss3 className="text-xl text-blue-500" />
                    <p className="text-primaryText font-semibold">CSS</p>
                  </div>
                  {/* icons */}
                  <div className="cursor-pointer flex items-center justify-center gap-5 px-4">
                    <FcSettings className="text-xl" />
                    <FaChevronDown className="text-xl text-primaryText" />
                  </div>
                </div>
                <div className="w-full px-2">
                  <CodeMirror
                    value={css}
                    height="600px"
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                      setCss(value);
                    }}
                    theme={"dark"}
                  />
                </div>
              </div>
              {/* js code */}
              <div className="w-full h-full flex flex-col items-start justify-start">
                <div className="w-full flex items-center justify-between">
                  <div className="bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500">
                    <FaJs className="text-xl text-yellow-500" />
                    <p className="text-primaryText font-semibold">JS</p>
                  </div>
                  {/* icons */}
                  <div className="cursor-pointer flex items-center justify-center gap-5 px-4">
                    <FcSettings className="text-xl" />
                    <FaChevronDown className="text-xl text-primaryText" />
                  </div>
                </div>
                <div className="w-full px-2">
                  <CodeMirror
                    value={js}
                    height="600px"
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                      setJs(value);
                    }}
                    theme={"dark"}
                  />
                </div>
              </div>
            </SplitPane>
          </SplitPane>
          {/* bottom result section */}
          <div
            className="bg-white"
            style={{ overflow: "hidden", height: "100%" }}
          >
            <iframe
              title="Result"
              srcDoc={output}
              style={{ border: "none", width: "100%", height: "100%" }}
            />
          </div>
        </SplitPane>
      </div>
    </div>
  );
};

export default NewProject;
