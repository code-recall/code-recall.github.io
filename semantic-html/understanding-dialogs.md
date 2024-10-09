## The Difference Between Modal and Non-Modal Dialogs

I wrote this after reading Kilian's post about how to better leverage HTML elements so you don't need JavaScript: https://www.htmhell.dev/adventcalendar/2023/2/.

### Modal Dialogs

The example above is a *modal dialog*. A modal dialog:

>... interrupt users and demand an action. They are appropriate when user’s attention needs to be directed toward important information.
>
>... appear on top of the main content and moves the system into a special mode requiring user interaction. This dialog disables the main content until the user explicitly interacts with the modal dialog.
>
>[Modal & Nonmodal Dialogs: When (& When Not) to Use Them](https://www.nngroup.com/articles/modal-nonmodal-dialog/#:~:text=Modal%20dialog%3A%20A%20dialog%20that,interacts%20with%20the%20modal%20dialog.)

They are intended to alert users to an error or system state that requires immediate user action. They intentionally interrupt the users workflow. They are used to put the user into a *mode* that requires them to enter information, perform some action, before continuing with the current process. They can also be used to fragment a complex workflow into simpler steps. However, they should be used sparingly, to better ensure impact:

>Modal dialogs that are not directly related to users’ goals are perceived as annoying and can diminish [trust](https://www.nngroup.com/articles/trustworthy-design/) in the company.

### Non-Modal Dialogs

Non-modal or *modeless* dialogs do not require access to the main content to be restricted. Non-modal windows are useful when users need to quickly switch between modes in order to access certain information. They can be moved or minimised to allows users to perform other tasks. A good example of this is GMail which uses a non-modal window for composing new emails which allows users to continue to perform other actions like searching for additional information that might be helpful for composing the current email.


![Pasted image 20241009073234](https://github.com/user-attachments/assets/23646201-936d-4465-bb42-bf90774ee48b)



## Why Does react-aria Use a Modal Wrapper?

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

The example above comes from React Aria's [Dialog](https://react-spectrum.adobe.com/react-aria/Dialog.html) component. What stands out is that the `<Dialog>` component is rendered in a modal. 

Why do we need to nest the `<Dialog>` in a `<Modal>`? It seems silly doesn't it? By including the `<Modal>` we throw out mostly everything that comes for free with the `<Dialog>` element.

- We have to manage the open and closed state of the modal instead of the `<dialog>` or embedded form managing it itself. 
  >When a `<form>` within a `<dialog>` is submitted via the `dialog` method, the dialog box closes
  >[The Dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
  
- Styling the backdrop behind the `<dialog>`, above the inert content which the user can't interact with, is set on the modal, though it could just as easily be applied to the `<dialog>`.
	>The CSS [`::backdrop`](https://developer.mozilla.org/en-US/docs/Web/CSS/::backdrop) pseudo-element can be used to style the backdrop of a modal dialog, which is displayed behind the `<dialog>` element when the dialog is displayed using the [`HTMLDialogElement.showModal()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal) method. For example, this pseudo-element could be used to blur, darken, or otherwise obfuscate the inert content behind the modal dialog.
	>
	>[The Dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
	
- Modal behaviour is baked into the `<dialog>` element if triggered by the right API.
>Modal dialog boxes interrupt interaction with the rest of the page being inert, while non-modal dialog boxes allow interaction with the rest of the page.
>
>Dialogs opened with `.showModal` are rendered as modal dialogs.
>
>[The Dialog element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)


So, why do we need the `Modal`?
