# HNG13-STAGE-0-Testable-Profile-Card

# 🪪 Profile Card — Stage 0 Task

A simple, responsive, and accessible **Profile Card** built with **HTML**, **CSS**, and **Vanilla JavaScript**, following semantic HTML best practices and Stage 0 task guidelines.

## 📋 Features

- ✅ Semantic HTML structure (`<article>`, `<header>`, `<figure>`, `<nav>`, `<section>`)
- ✅ All elements include `data-testid` attributes for automated testing
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Current time displayed in **milliseconds** using `Date.now()`
- ✅ Avatar image with proper `alt` text
- ✅ Social links open in new tabs with `rel="noopener noreferrer"`
- ✅ Accessible keyboard navigation and visible focus styles

## 🧱 Project Structure


- **index.html:** Contains the semantic markup and `data-testid` attributes  
- **style.css:** Handles layout, responsiveness, and accessibility styles  
- **script.js:** Updates and displays current time dynamically

## 🧪 Data Test IDs Used

| Element | data-testid |
|----------|--------------|
| Profile card root | `test-profile-card` |
| User name | `test-user-name` |
| Biography | `test-user-bio` |
| Current time | `test-user-time` |
| Avatar image | `test-user-avatar` |
| Social links container | `test-user-social-links` |
| Hobbies list | `test-user-hobbies` |
| Dislikes list | `test-user-dislikes` |

## 🖼️ Responsiveness

- Mobile: content stacks vertically  
- Tablet & Desktop: avatar aligned beside text  
- Uses **Flexbox** for layout adaptability

## 🕒 Behavior

- `Date.now()` is displayed dynamically in milliseconds  
- All links open in a new tab for security and accessibility

## 🎥 Reference

**Task explainer video:** [Watch here](https://vm.tiktok.com/ZMAXLFy8s/)

 ## How to Run Locally
Clone the repository using the command
   git clone https://github.com/ifeMakinde/HNG13-STAGE-0-Testable-Profile-Card.git
Navigate to the folder

cd Testable Profile Card
Run `Code .` and Open index.html in your browser .
