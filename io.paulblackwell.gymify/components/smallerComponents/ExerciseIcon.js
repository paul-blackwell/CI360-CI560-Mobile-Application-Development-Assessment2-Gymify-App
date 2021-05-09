import React from 'react';
import { SvgXml } from "react-native-svg";


/**
 *  A the ExerciseScreen uses custom svg icons that expo icons doesn’t have, 
 * these icons must be loaded in differently. This component will do this for us 
 * and change their color based on the color prop.
 */

export default TabBarIcon = ({ icon = 'sets' }) => {

    let svgMarkup;
    if (icon === 'sets') {
        svgMarkup =
            `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12.75C10.139 12.75 8.625 11.236 8.625 9.375C8.625 7.514 10.139 6 12 6C13.861 6 15.375 7.514 15.375 9.375C15.375 11.236 13.861 12.75 12 12.75ZM12 7.5C10.966 7.5 10.125 8.341 10.125 9.375C10.125 10.409 10.966 11.25 12 11.25C13.034 11.25 13.875 10.409 13.875 9.375C13.875 8.341 13.034 7.5 12 7.5Z" fill="#2B2C34"/>
            <path d="M9.00003 24C8.58603 24 8.25003 23.664 8.25003 23.25V17.81C7.28703 17.352 6.40603 16.704 5.68803 15.924C4.05903 13.979 3.11403 11.536 3.01503 9.03C3.00003 8.616 3.32203 8.267 3.73503 8.25C3.74003 8.25 3.75703 8.25 3.76203 8.25C4.16803 8.25 4.49803 8.567 4.51403 8.97C4.60003 11.146 5.41703 13.264 6.81503 14.934C7.48203 15.658 8.33803 16.246 9.27903 16.623C9.56503 16.738 9.75003 17.011 9.75003 17.319V23.249C9.75003 23.664 9.41403 24 9.00003 24Z" fill="#2B2C34"/>
            <path d="M9.57503 15.0002C9.45103 15.0002 9.32703 14.9692 9.21803 14.9092C8.73603 14.6482 8.29903 14.3152 7.91803 13.9202C5.69303 11.5082 5.99603 7.5952 6.00003 7.5562C6.02403 7.2522 5.86203 6.9662 5.58703 6.8292C5.21603 6.6442 5.06503 6.1932 5.25003 5.8232C5.37803 5.5672 5.63503 5.4082 5.92103 5.4082C6.03603 5.4082 6.15203 5.4352 6.25603 5.4872C7.08203 5.8992 7.56703 6.7602 7.49403 7.6802C7.49203 7.7112 7.27203 11.0082 9.00903 12.8922C9.23203 13.1232 9.49103 13.3292 9.77503 13.5002H14.228C14.516 13.3262 14.78 13.1132 15.013 12.8682C16.633 11.1052 16.526 8.0212 16.509 7.6752C16.509 7.6742 16.509 7.6732 16.509 7.6722C16.438 6.7562 16.923 5.9002 17.745 5.4882C17.849 5.4362 17.965 5.4092 18.08 5.4092C18.366 5.4092 18.623 5.5682 18.751 5.8232C18.936 6.1932 18.786 6.6442 18.416 6.8292C18.14 6.9672 17.978 7.2552 18.005 7.5622C18.007 7.5872 18.007 7.6062 18.007 7.6252C18.041 8.2742 18.109 11.7142 16.109 13.8912C15.718 14.3032 15.274 14.6442 14.784 14.9092C14.673 14.9692 14.55 15.0002 14.426 15.0002H9.57503Z" fill="#2B2C34"/>
            <path d="M15 24C14.586 24 14.25 23.664 14.25 23.25V17.32C14.25 17.011 14.435 16.738 14.722 16.624C15.662 16.248 16.523 15.656 17.209 14.912C18.588 13.263 19.401 11.149 19.486 8.97098C19.502 8.55998 19.828 8.25098 20.245 8.25098C20.678 8.26698 21.001 8.61698 20.985 9.02998C20.887 11.537 19.946 13.978 18.336 15.902C17.6 16.701 16.713 17.354 15.751 17.811V23.25C15.75 23.664 15.414 24 15 24Z" fill="#2B2C34"/>
            <path d="M21.75 7.5C20.509 7.5 19.5 6.491 19.5 5.25V4.386C17.02 3.964 14.499 3.75 12.001 3.75C9.502 3.75 6.98 3.964 4.5 4.386V5.25C4.5 6.491 3.491 7.5 2.25 7.5C1.009 7.5 0 6.491 0 5.25V2.25C0 1.009 1.009 0 2.25 0C3.491 0 4.5 1.009 4.5 2.25V2.866C6.982 2.457 9.503 2.25 12.001 2.25C14.498 2.25 17.019 2.457 19.5 2.865V2.25C19.5 1.009 20.509 0 21.75 0C22.991 0 24 1.009 24 2.25V5.25C24 6.491 22.991 7.5 21.75 7.5ZM21.75 1.5C21.336 1.5 21 1.836 21 2.25V5.25C21 5.664 21.336 6 21.75 6C22.164 6 22.5 5.664 22.5 5.25V2.25C22.5 1.836 22.164 1.5 21.75 1.5ZM2.25 1.5C1.836 1.5 1.5 1.836 1.5 2.25V5.25C1.5 5.664 1.836 6 2.25 6C2.664 6 3 5.664 3 5.25V2.25C3 1.836 2.664 1.5 2.25 1.5Z" fill="#2B2C34"/>
            </svg>`;

    } else if (icon === 'reps') {
        svgMarkup = 
        `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
        <path d="M8.5 22.25C8.439 22.25 8.378 22.242 8.319 22.228C7.917 22.127 7.672 21.719 7.773 21.318L9.017 16.344C9.094 16.038 8.968 15.714 8.705 15.539C7.662 14.843 6.945 13.735 6.74 12.498L6.365 10.25H4.75V12.5C4.75 13.741 3.741 14.75 2.5 14.75C1.259 14.75 0.25 13.741 0.25 12.5V4.25C0.25 3.009 1.259 2 2.5 2C3.741 2 4.75 3.009 4.75 4.25V5.75H7.879C8.192 4.865 9.04 4.25 10 4.25H16C16.96 4.25 17.808 4.865 18.121 5.75H19.75V4.25C19.75 3.009 20.759 2 22 2C23.241 2 24.25 3.009 24.25 4.25V12.5C24.25 13.741 23.241 14.75 22 14.75C20.759 14.75 19.75 13.741 19.75 12.5V10.25H18.25V11.75C18.224 12.831 18.031 13.885 17.676 14.891C17.579 15.301 17.582 15.733 17.684 16.142L18.978 21.318C19.078 21.719 18.834 22.127 18.433 22.228C18.372 22.243 18.311 22.25 18.251 22.25C17.906 22.25 17.607 22.016 17.524 21.682L16.23 16.506C16.065 15.848 16.065 15.152 16.23 14.494C16.235 14.472 16.243 14.448 16.251 14.424C16.561 13.557 16.73 12.652 16.751 11.732V6.5C16.751 6.086 16.415 5.75 16.001 5.75H15.251V8C15.251 8.414 14.915 8.75 14.501 8.75C14.087 8.75 13.75 8.414 13.75 8V5.75H12.25V8C12.25 8.414 11.914 8.75 11.5 8.75C11.086 8.75 10.75 8.414 10.75 8V5.75H10C9.586 5.75 9.25 6.086 9.25 6.5V9.5C9.25 9.914 8.914 10.25 8.5 10.25H7.885L8.218 12.252C8.356 13.081 8.836 13.824 9.535 14.29C10.324 14.816 10.701 15.787 10.471 16.707L9.227 21.682C9.144 22.016 8.845 22.25 8.5 22.25ZM22 3.5C21.586 3.5 21.25 3.836 21.25 4.25V12.5C21.25 12.914 21.586 13.25 22 13.25C22.414 13.25 22.75 12.914 22.75 12.5V4.25C22.75 3.836 22.414 3.5 22 3.5ZM2.5 3.5C2.086 3.5 1.75 3.836 1.75 4.25V12.5C1.75 12.914 2.086 13.25 2.5 13.25C2.914 13.25 3.25 12.914 3.25 12.5V4.25C3.25 3.836 2.914 3.5 2.5 3.5ZM19.75 8.75V7.25H18.25V8.75H19.75ZM7.75 8.75V7.25H4.75V8.75H7.75Z" fill="#2B2C34"/>
        </g>
        <defs>
        <clipPath id="clip0">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `;

    }

    const SvgImage = () => <SvgXml xml={svgMarkup} />;

    return (
        <SvgImage />
    )
}