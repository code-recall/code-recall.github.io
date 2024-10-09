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
