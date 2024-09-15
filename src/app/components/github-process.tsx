"use client";
import { useEffect } from "react";
import githubVerification from "../actions/verify-github";

const GitHubProcess = () => {
    useEffect(() => {
        const githubVerificationProcess = async () => {
            const url = window.location.href;
            const code = url.split("?code=")[1];
            if (code && await githubVerification(code)) {
                console.log("GitHub verification done!!!");
                window.location.href = "/freelancer-dashboard";
            }
        };

        githubVerificationProcess();
    }, []);

    return null;
};

export default GitHubProcess;