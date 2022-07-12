//TODO: BIND CONTROLS TO CREATE CARDS the rest of cards, CREATE CARDS ON STARTUP(need api setup for this in reality)
import React, { Component } from "react";
import { red, orange, green, purple, blue } from "@mui/material/colors";
import {store} from '../app/store'
import PropTypes from "prop-types";
import ElementItem from "./ElementItem";
import Grid from "@mui/material/Grid";
import {
	Cast,
	Extras,
	Vehicles,
	Props,
	Costumes,
	Makeup,
	Sound,
	Set,
    Storyboard
} from "./ElementTags";
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
	static propTypes = {
        elements: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            elementType: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired,
            sceneNum: PropTypes.string.isRequired
          }).isRequired).isRequired,
		actions: PropTypes.object.isRequired,
	};
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
		{
			tooltipText: "Add Cast",
			template:
				'<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar_cast"  ><div class="e-tbar-btn-text"><i class="material-icons " style="color:#2962FF;">person</i></div></button>',
			click: this.onInsert.bind(this, "cast", "cast"),
		},
		{
			tooltipText: "Add Extras",
			template:
				'<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar_extras"  ><div class="e-tbar-btn-text"><i class="material-icons " style="color:#00C853;">groups</i></div></button>',
			click: this.onInsert.bind(this, "extras", "extras"),
		},
		{
			tooltipText: "Add Vehicle",
			template:
				'<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar_vehc"  ><div class="e-tbar-btn-text"><i class="material-icons " style="color:#00B8D4;">directions_car</i></div></button>',
			click: this.onInsert.bind(this, "vehicles", "vehicles"),
		},
		{
			tooltipText: "Add Props",
			template:
				'<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar_props"  ><div class="e-tbar-btn-text"><i class="material-icons " style="color:#3E2723;">table_restaurant</i></div></button>',
			click: this.onInsert.bind(this, "props", "props"),
		},
		{
			tooltipText: "Add Costumes",
			template:
				'<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar_costume"  ><div class="e-tbar-btn-text"><i class="material-icons " style="color:#FF6D00;">checkroom</i></div></button>',
			click: this.onInsert.bind(this, "costumes", "costumes"),
		},
		{
			tooltipText: "Add Makeup",
			template:
				'<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar_makeup"  ><div class="e-tbar-btn-text"><i class="material-icons " style="color:#AA00FF;">brush</i></div></button>',
			click: this.onInsert.bind(this, "makeup", "makeup"),
		},
		{
			tooltipText: "Add Sound",
			template:
				'<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar_sound"  ><div class="e-tbar-btn-text"><i class="material-icons " style="color:#6200EA;">volume_up</i></div></button>',
			click: this.onInsert.bind(this, "sound", "sound"),
		},
		{
			tooltipText: "Add Set",
			template:
				'<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar_set"  ><div class="e-tbar-btn-text"><i class="material-icons " style="color:#64DD17;">location_on</i></div></button>',
			click: this.onInsert.bind(this, "set", "set"),
		},
        {
			tooltipText: "Add Storyboard",
			template:
				'<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar_set"  ><div class="e-tbar-btn-text"><i class="material-icons " style="color:#ffff00;">add_a_photo</i></div></button>',
			click: this.onInsert.bind(this, "storyboard", "storyboard"),
		},
	];
	toolbarSettings = {
		items: this.items,
	};

	onInsert(buttonType: string, idType: string) {
		this.rteObj.contentModule.getEditPanel().focus();
		this.range = this.selection.getRange(document);
		this.saveSelection = this.selection.save(this.range, document);
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
		var stringbuilder = `<${buttonType} id="${className}-${idType}">${trimStr}</${buttonType}>`;
		if (whtspcTr) stringbuilder += " ";
		if (whtspcSt) stringbuilder = " " + stringbuilder;
		console.log(className, stringbuilder);

		var deleteClassName = this.rteObj
			.getHtml()
			.includes(`id="${className}-${idType}"`)
			? className
			: this.rteObj.getHtml().includes(`id="${className2}-${idType}"`)
			? className2
			: null;
		//console.log(this.rteObj.getSelection());
		console.log(this.rteObj.getSelectedHtml().includes(`<${buttonType}`));
		if (
			deleteClassName !== null &&
			this.rangeCompareNode(
				this.range,
				this.rteObj.getContent().querySelector(`#${deleteClassName}-${idType}`)
			) > 1
		) {
			console.log("delete");
			//console.log(this.selection.baseNode.parentElement.className);
			var pp = this.rteObj
				.getContent()
				.querySelector(`#${deleteClassName}-${idType}`);
			var tt = pp.innerHTML;

			var zz = this.rangeCompareNode(this.range, pp);
			console.log(
				"this.rteObj.getContent().querySelector(`#${deleteClassName}-${idType}`): "
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
            this.props.actions.deleteElement(+pp.getAttribute("element-ID"));
			z.normalize();
		} else if (!selSingle) {
			console.log("add");
			var qq = this.range.extractContents();
			var qc = qq.children;
			// for (var i = 0; i < qq.childElementCount; i++) {
			//   console.log(qc.item(i));
			//   console.log(qc.item(i).id);
			// }

			if (qq.querySelector(buttonType) != null) {
				console.log("add-elem");
				//   var divi = document.createElement('div');
				//   divi.innerHTML = this.rteObj.getSelectedHtml().trim();
				console.log(
					`qq.querySelectorAll(${buttonType}).length: ` +
						qq.querySelectorAll(buttonType).length
				);
				while (qq.querySelectorAll(buttonType).length) {
					var t = qq.querySelectorAll(buttonType).item(0);
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
					//qq.querySelectorAll('Cast').item(i).unwrap();
					//qq.getElementsByTagName('Cast').item(i).remove();
					//console.log("qq" + qq.getHtml());
					// var pp = qq.querySelector(`#${id}`);
					// pp.unwrap();
					//pp.remove();
				}
			}

            //CODE FOR ADDING A ELEMENT
            console.log('Initial state: ', store.getState())
			var addElem = this.props.actions.addCast(trimStr, 2); //WERE ADDING A CAST ELEM CARD HERE, we need to add support for all elements depending on buttonType
            var addedId = store.getState().elements.at(-1)?.id ;
            addedId ??= 0
            console.log('State after dispatch: ', store.getState())

            //CODE for displaying the correct color/bg-color
			console.log(this.rteObj.getHtml());
			var g = document.createElement(buttonType);
			g.setAttribute("id", `${className}-${idType}`);
            g.setAttribute("element-ID",addedId?.toString());
            g.setAttribute("scene-Num", addElem.sceneNum);
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
		//     `<Cast>${this.rteObj.getSelectedHtml()}</Cast>`
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
										<h1>
											Hello sir this is how it works
											yaayaa how hello very dope
										</h1>
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
