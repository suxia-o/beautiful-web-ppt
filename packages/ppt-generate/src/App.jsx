import { useRef, useEffect } from "react";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm";
import HighLight from "reveal.js/plugin/highlight/highlight.esm";
import Math from "reveal.js/plugin/math/math.esm";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";
import "./App.scss";

function App() {
  const deckRef = useRef(null);
  const doSomething = () => {
    console.log("✨");
  };
  useEffect(() => {
    if (!deckRef.current) {
      deckRef.current = new Reveal({
        plugins: [HighLight, Math.KaTeX],
      });
      deckRef.current.initialize({
        plugins: [Markdown],
        loop: true,
      });
      deckRef.current.on("make-it-pop", doSomething);
    }
    return () => {
      deckRef.current.off("make-it-pop");
    };
  }, []);

  // 自定义Reveal样式
  // useEffect(() => {
  //   document.querySelector(".reveal").style.width = "100vw";
  //   document.querySelector(".reveal").style.height = "100vh";
  // }, []);
  return (
    <div className="reveal">
      <div className="slides">
        {/* <section>WEB PPT</section>
        <section>
          <div>reveal.js是什么</div>
          <section>开源的HTML框架</section>
          <section>能让你在web浏览器中创建精美的演示文稿</section>
        </section>
        <section>
          <div>reveal.js跟微软的PPT是什么区别</div>
          <section>
            <h5>运行环境不同</h5>
            <ul>
              <li>PPT: 运行在操作系统上</li>
              <li>reveal.js: 运行在浏览器中</li>
            </ul>
          </section>
          <section>
            <h5>制作方式不同</h5>
            <ul>
              <li>PPT: </li>
              <li>
                reveal.js:
                <ul>
                  <li>使用这个库 & HTML + CSS + JS</li>
                  <li>使用Markdown方式导入</li>
                </ul>
              </li>
            </ul>
          </section>
        </section> */}
        <section data-markdown="">
          <textarea data-template>
            ## Slide 1
            A paragraph with some text and a [link](https://hakim.se).
            ---
            ## Slide 2
            ---
            ## Slide 3
          </textarea>
        </section>
      </div>
    </div>
  );
}

export default App;
