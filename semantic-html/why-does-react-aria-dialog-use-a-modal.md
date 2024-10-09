## React Aria Might be Behind the Curve

```javascript
import {Button, Dialog, DialogTrigger, Heading, Input, Label, Modal, TextField} from 'react-aria-components';

<DialogTrigger>
  <Button>Sign up…</Button>
  <Modal>
    <Dialog>
      {({ close }) => (
        <form>
          <Heading slot="title">Sign up</Heading>
          <TextField autoFocus>
            <Label>First Name</Label>
            <Input />
          </TextField>
          <TextField>
            <Label>Last Name</Label>
            <Input />
          </TextField>
          <Button onPress={close} style={{ marginTop: 8 }}>
            Submit
          </Button>
        </form>
      )}
    </Dialog>
  </Modal>
</DialogTrigger>
```

The example above comes from React Aria's [Dialog](https://react-spectrum.adobe.com/react-aria/Dialog.html) component. What stands out is that the `<Dialog>` component is rendered in a modal. Why do we need to nest the `<Dialog>` in a `<Modal>`? 

<img width="790" alt="Screenshot 2024-10-09 at 8 27 15 PM" src="https://github.com/user-attachments/assets/6ad058ac-49ff-435c-8d31-4fd791370153">

React Aria does this because it doesn't make use of the `<dialog>` element native to browsers. Most likely because this implementation precedes full browser support for the `<dialog>` element. And because it doesn't make use of the native element, it needs to implement itself a bunch of features that otherwise come for free with the native element. The `<dialog>` itself:

- A capacity to manage its own open and closed state. In fact, if a `<form>` within a `<dialog>` is submitted via the *dialog* method, the `<dialog>` [closes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog).
  
- An ability to style the backdrop behind the `<dialog>` above the inert content which the user can't interact with.
>	The CSS [`::backdrop`](https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop) pseudo-element can be used to style the backdrop of a modal dialog, which is displayed behind the `<dialog>` element when the dialog is displayed using the [`HTMLDialogElement.showModal()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal) method. For example, this pseudo-element could be used to blur, darken, or otherwise obfuscate the inert content behind the modal dialog.
	>
	>[The Dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
	
- Renders in the top layer. Outside of the normal flow of the document and above all other elements.
  
- Supports modal dialog and non-modal dialog *modes*.
>Modal dialog boxes interrupt interaction with the rest of the page being inert, while non-modal dialog boxes allow interaction with the rest of the page.
>	Dialogs opened with `.showModal` are rendered as modal dialogs.
>
>	[The Dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
  


Using React Aria achieves the same outcome as the native `<dialog>` element. But it might miss the advantage of a simpler, less boilerplate-y, solution. It also better follows that using the native `<dialog>` better adheres to the principle of *least power*.
