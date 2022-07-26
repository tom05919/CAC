import { useState } from "react"

export const passwordTuggle = () => {
    const [passwordVis, setPasswordVis] = useState(true)
    const [icon, setIcon] = useState('eye');

    const handlePasswordVis = () => {
        if (icon == 'eye') {
            setIcon('eye-off')
            setPasswordVis(!passwordVis)
        } else if (icon == 'eye-off') {
            setIcon('eye')
            setPasswordVis(!passwordVis)
        }
    }

    return {
        passwordVis,
        icon,
        handlePasswordVis,
    };
};