import React from "react";
import grapesjs from "grapesjs";
import grapesjsPresetWebpage from "grapesjs-blocks-basic";
import { useEffect, useState } from "react";
import pluginOne from "../../../Components/theme_1/CustomPlugins/pluginOne";
const index = () => {

  const [editor, setEditor] = useState();
  const myFirstBlock = editor => {
    var blockManager = editor.BlockManager;
    // 'my-first-block' is the ID of the block
    blockManager.add('my-first-block', {
     label: 'Button',
     content: {
       type: "button",
       tagName: 'button',
       draggable: true,
       attributes: { class: 'container'},
       style: { 'background-color': 'red' },
       content: "Save",
     }
    });
   }

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      plugins: [grapesjsPresetWebpage, pluginOne],
      Panels: [],
      pageManager: {
        pages: [
          {
            id: "new-page-id", // without an explicit ID, a random one will be created
            styles: `.my-class { color: red }`, // or a JSON of styles
            component:
              '<div className="my-class">Hello World This is my page no one</div>', // or a JSON of components
          },
        ],
      },

      pluginsOpts: {
        grapesjsPresetWebpage: {
          blocksBasicOpts: {
            blocks: [
              "column1",
              "column2",
              "column3",
              "column3-7",
              "text",
              "link",
              "image",
              "video",
            ],
            flexGrid: 1,
          },
          blocks: ["link-block", "quote", "text-basic"],
        },
      },
      // storageManager: {
      //   autosave: true,
      //   setStepsBeforeSave: 1,
      //   type: 'remote',
      //   urlStore: 'http://cimailer.dev/templates/template',
      //   urlLoad: 'http://cimailer.dev/templates/template',
      //   contentTypeJson: true,
      //   },
    });
    setEditor(editor);
  }, []);

  editor?.Panels.addButton("options", [
    {
      id: "save-db",
      className: "fa fa-floppy-o",
      command: "save-db",
      attributes: { title: "Save DB" },
    },
  ]);

  editor?.Commands.add("save-db", {
    run: function (editor, sender) {
      // sender && sender.set("active");
      // editor.store();
      console.log(editor?.getProjectData());
      console.log("Html", editor?.getHtml());
      console.log("css", editor?.getCss());
    },
  });

  // editor?.loadProjectData( editor?.getProjectData());
  // console.log("project Data", editor?.getProjectData());
  // console.log("Html",editor?.getHtml());
  // console.log("css",editor?.getCss());
  return (
    <div>
      <div id='gjs'></div>
      {/* <div className='panel__top'>
        <div className='panel__basic-actions'></div>
      </div> */}
    </div>
  );
};

export default index;
