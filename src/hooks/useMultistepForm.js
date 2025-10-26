import { useRef, useState } from "react";

export function useMultistepForm(formSteps) {


    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const isFirstStep = currentStepIndex === 0;
    const isLastStep = currentStepIndex === formSteps.length - 1;

    function next() {
        setCurrentStepIndex((i) => (i < formSteps.length - 1 ? i + 1 : i));
        scrollToTop()

    }

    function prev() {
        setCurrentStepIndex((i) => (i > 0 ? i - 1 : i));
        scrollToTop()

    }

    function scrollToTop() {
        window.scrollTo({top: 0,behavior: 'smooth'})
    }

    function goTo(index) {
        if (index >= 0 && index < formSteps.length) {
            setCurrentStepIndex(index);
        }
    }

    const steps = formSteps.map((_, index) => {
        return {
            index,
            title: formSteps[index].title,
            description: formSteps[index].description,
            status: index < currentStepIndex ? "completed" : index === currentStepIndex ? "active" : "upcoming",
            component: formSteps[index].component,
            schema: formSteps[index].schema
        };
    });

    const currentStep = steps[currentStepIndex]

    return {
        currentStepIndex,
        currentStep,
        steps,
        next,
        prev,
        goTo,
        isFirstStep,
        isLastStep,
    };
}