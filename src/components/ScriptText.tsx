//TODO: BIND CONTROLS TO CREATE CARDS, CREATE CARDS ON STARTUP(need api setup for this in reality), ADD ADDITIONAL CONTROLS & MAP COLORS   
import React, { Component } from "react";
import { red, orange, green, purple, blue } from "@mui/material/colors";
import PropTypes from "prop-types";
import ElementItem from "./ElementItem";
import Grid from "@mui/material/Grid";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import "./ScriptText.css";
import {
	RichTextEditorComponent,
	Inject,
	QuickToolbar,
	Image,
	Link,
	HtmlEditor,
	Toolbar,
	InlineModeModel,
	FormatModel,
	FontFamilyModel,
	ToolbarSettingsModel,
	IToolbarItems,
	NodeSelection,
} from "@syncfusion/ej2-react-richtexteditor";
import { AnyObject } from "immer/dist/internal";

export default class ScriptText extends Component<any, any> {
	rteObj: any;
	rteSectionEle = null;
	rteSectionRef;
	constructor(props: any) {
		super(props);
		this.rteSectionRef = (element: null) => {
			this.rteSectionEle = element;
		};
	}
	selection = new NodeSelection();
	range: any;
	customBtn: any;
	dialogCtn: any;
	saveSelection: any;
	inlineMode = {
		enable: true,
		onSelection: false,
	};
	format = {
		width: "auto",
	};
	fontFamily = {
		width: "auto",
	};
	private items: (string | IToolbarItems)[] = [
		"SourceCode",
		{
			tooltipText: "Add Location",
			template:
				'<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar_loc"  ><div class="e-tbar-btn-text"><i class="material-icons " style="color:#d50000;">location_on</i></div></button>',
			click: this.onCreate.bind(this, "loc"),
		},
		{
			tooltipText: "Add Vehicle",
			template:
				'<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar_vehc"  ><div class="e-tbar-btn-text"><i class="material-icons " style="color:#ff6d00;">directions_car</i></div></button>',
		},
		{
			tooltipText: "Add Wardrobe",
			template:
				'<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar_ward"  ><div class="e-tbar-btn-text"><i class="material-icons " style="color:#00c853;">checkroom</i></div></button>',
		},
		{
			tooltipText: "Add Cast",
			template:
				'<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar_cast"  ><div class="e-tbar-btn-text"><i class="material-icons " style="color:#aa00ff;">person</i></div></button>',
		},
		"|",
		"Undo",
		"Redo",
	];
	toolbarSettings = {
		items: this.items,
	};
	onCreate(stringy: string) {
		this.customBtn = document.getElementById("custom_tbar_loc");
		this.customBtn.onclick = (e: any) => {
			this.rteObj.contentModule.getEditPanel().focus();
			this.range = this.selection.getRange(document);
			this.saveSelection = this.selection.save(this.range, document);
			this.onInsert();
		};
	}
	onInsert() {
		if (this.rteObj.formatter.getUndoRedoStack().length === 0) {
			this.rteObj.formatter.saveData();
		}
		this.saveSelection.restore();

		//this.rteObj.style = 'color:#aa00ff';
		//   console.log(
		//     this.rteObj?.getSelection().baseNode?.parentElement.className
		//   );
		console.log("this.range.toString()" + this.range.toString());
		console.log(
			"this.range.commonAncestorContainer" + this.range.commonAncestorContainer
		);
		console.log(
			"this.range.commonAncestorContainer.data" +
				this.range.commonAncestorContainer.data
		);
		console.log("this.rteObj?.getText()" + this.rteObj?.getText());
		console.log("this.rteObj.getSelection(): " + this.rteObj.getSelection());
		console.log(
			"==" + this.range.commonAncestorContainer?.data == this.rteObj?.getText()
		);
		console.log(
			"===" + this.range.commonAncestorContainer?.data ===
				this.rteObj?.getText()
		);

		var selStr = this.rteObj.getSelection();
		var className2 = "do_not_match-bad-element-this-is-so-hacky";
		var selSingle = false;
		if (selStr == "" || selStr == " ") {
			selSingle = true;
		}
		if (
			this.range.commonAncestorContainer?.data != this.rteObj?.getText() &&
			this.range.commonAncestorContainer?.data != undefined
		) {
			var selStr2 = this.range.commonAncestorContainer.data;
			var trimStrTr2 = selStr2.trimEnd();
			var trimStr2 = trimStrTr2.trimStart();
			className2 = trimStr2.replace(
				/[!"#$%&'()\*\+,\./:;<=>\?@\[\\\]^`{\|}~/\s ]+/g,
				"-"
			);
		}

		console.log("selStr: " + selStr);

		console.log("this.rteObj.getHtml(): " + this.rteObj.getHtml());
		console.log(
			"this.rteObj.getSelectedHtml(): " + this.rteObj.getSelectedHtml()
		);
		var trimStrTr = selStr.trimEnd();
		var whtspcTr = trimStrTr == selStr ? false : true;
		var trimStr = trimStrTr.trimStart();
		var whtspcSt = trimStrTr == trimStr ? false : true;
		var className = trimStr.replace(
			/[!"#$%&'()\*\+,\./:;<=>\?@\[\\\]^`{\|}~/\s ]+/g,
			"-"
		);
		var stringbuilder = `<mark id="${className}-prop">${trimStr}</mark>`;
		if (whtspcTr) stringbuilder += " ";
		if (whtspcSt) stringbuilder = " " + stringbuilder;
		console.log(className, stringbuilder);

		var deleteClassName = this.rteObj
			.getHtml()
			.includes(`id="${className}-prop"`)
			? className
			: this.rteObj.getHtml().includes(`id="${className2}-prop"`)
			? className2
			: null;
		//console.log(this.rteObj.getSelection());
		console.log(this.rteObj.getSelectedHtml().includes("<mark"));
		if (
			deleteClassName !== null &&
			this.rangeCompareNode(
				this.range,
				this.rteObj.getContent().querySelector(`#${deleteClassName}-prop`)
			) > 1
		) {
			console.log("delete");
			//console.log(this.selection.baseNode.parentElement.className);
			var pp = this.rteObj
				.getContent()
				.querySelector(`#${deleteClassName}-prop`);
			var tt = pp.innerHTML;

			var zz = this.rangeCompareNode(this.range, pp);
			console.log(
				"this.rteObj.getContent().querySelector(`#${deleteClassName}-prop`): "
			);
			console.log(pp);
			console.log("this.rangeCompareNode(this.range,pp);: ");
			console.log(zz);
			var z = pp.parentNode;
			pp.remove();
			console.log("this.rteObj.getSelection(): " + this.rteObj.getSelection());
			console.log("this.rteObj.getHtml(): " + this.rteObj.getHtml());
			console.log(tt);
			//if (whtspcTr) tt += ' ';
			//if (whtspcSt) tt = ' ' + tt;
			this.rteObj.executeCommand("insertHTML", `${tt}`);
			z.normalize();
		} else if (!selSingle) {
			console.log("add");
			var qq = this.range.extractContents();
			var qc = qq.children;
			// for (var i = 0; i < qq.childElementCount; i++) {
			//   console.log(qc.item(i));
			//   console.log(qc.item(i).id);
			// }

			if (qq.querySelector("mark") != null) {
				console.log("add-mark");
				//   var divi = document.createElement('div');
				//   divi.innerHTML = this.rteObj.getSelectedHtml().trim();
				console.log(
					"qq.querySelectorAll(mark).length: " +
						qq.querySelectorAll("mark").length
				);
				while (qq.querySelectorAll("mark").length) {
					var t = qq.querySelectorAll("mark").item(0);
					console.log("t: " + t);
					console.log("t.id: " + t.id);
					var id = t.id;
					console.log("t.parentNode: " + t.parentNode);
					while (t.firstChild) {
						qq.insertBefore(t.firstChild, t);
					}
					qq.removeChild(t);
					qq.normalize();
					//while()
					//qq.querySelectorAll('mark').item(i).unwrap();
					//qq.getElementsByTagName('mark').item(i).remove();
					//console.log("qq" + qq.getHtml());
					// var pp = qq.querySelector(`#${id}`);
					// pp.unwrap();
					//pp.remove();
				}
			}
			console.log(this.rteObj.getHtml());
			var g = document.createElement("mark");
			g.setAttribute("id", `${className}-prop`);
			g.appendChild(qq);
			g.normalize();
			this.range.insertNode(g);
			//this.rteObj.executeCommand('insertHTML', stringbuilder);
		}
		console.log(this.rteObj.getHtml());
		console.log(
			"------------------------------------------------------------------------------------------"
		);
		//   this.rteObj.executeCommand(
		//     'insertHTML',
		//     `<mark>${this.rteObj.getSelectedHtml()}</mark>`
		//   );
		this.selection.Clear(document);
		this.rteObj.formatter.saveData();
		this.rteObj.formatter.enableUndo(this.rteObj);
	}
	rangeCompareNode(range: Range, node: any) {
		const nodeRange = node.ownerDocument.createRange();
		try {
			nodeRange.selectNode(node);
		} catch (e) {
			nodeRange.selectNodeContents(node);
		}
		const nodeIsBefore =
			range.compareBoundaryPoints(Range.START_TO_START, nodeRange) == 1;
		const nodeIsAfter =
			range.compareBoundaryPoints(Range.END_TO_END, nodeRange) == -1;

		if (nodeIsBefore && !nodeIsAfter) return 0;
		if (!nodeIsBefore && nodeIsAfter) return 1;
		if (nodeIsBefore && nodeIsAfter) return 2;

		return 3;
	}
	render() {
		return (
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<div className="control-pane">
						<div className="control-section" id="rteInline">
							<div className="col-lg-8">
								<div className="content-wrapper">
									<RichTextEditorComponent
										id="inlineRTE"
										ref={(richtexteditor) => {
											this.rteObj = richtexteditor;
										}}
										inlineMode={this.inlineMode}
										toolbarSettings={this.toolbarSettings}
										format={this.format}
										fontFamily={this.fontFamily}
									>
										<div>
											Hello sir this is how it works yaayaa how hello very dope
										</div>
										<div>
											Hello sir this is how it works yaayaa how hello very dope
										</div>
										<div>
											Hello sir this is how it works yaayaa how hello very dope
										</div>
										<Inject
											services={[
												Image,
												Link,
												QuickToolbar,
												HtmlEditor,
												Toolbar,
											]}
										/>
									</RichTextEditorComponent>
								</div>
							</div>
						</div>
					</div>
				</Grid>
			</Grid>
		);
	}
}
