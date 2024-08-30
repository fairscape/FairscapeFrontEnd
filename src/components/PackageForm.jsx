import React, { useState } from "react";
import styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { ipcRenderer } from "electron";

const StyledForm = styled(Form)`
  background-color: #282828;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h3`
  color: #ffffff;
  margin-bottom: 10px;
  text-align: center;
`;

const StyledFormGroup = styled(Form.Group)`
  margin-bottom: 20px;
`;

const StyledLabel = styled(Form.Label)`
  color: #ffffff;
  font-weight: bold;
`;

const StyledInput = styled(Form.Control)`
  background-color: #3e3e3e;
  border: 1px solid #555;
  color: #ffffff;
  &:focus {
    background-color: #3e3e3e;
    color: #ffffff;
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const StyledButton = styled(Button)`
  background-color: #007bff;
  border: none;
  &:hover {
    background-color: #0056b3;
  }
`;

const BrowseButton = styled(Button)`
  margin-top: 10px;
`;

const OutputContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #3e3e3e;
  border-radius: 5px;
  color: #ffffff;
`;

function PackageForm({ rocratePath, setRocratePath, onComplete }) {
  const [output, setOutput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOutput("Starting to process RO-Crate...");
    try {
      // First, generate evidence graphs
      const evidenceGraphResult = await ipcRenderer.invoke(
        "generate-evidence-graphs",
        rocratePath
      );
      if (evidenceGraphResult.success) {
        setOutput(
          (prevOutput) =>
            prevOutput + "\nEvidence graphs generated successfully."
        );
      } else {
        throw new Error(evidenceGraphResult.error);
      }

      // Then, zip the updated RO-Crate
      const zipResult = await ipcRenderer.invoke("zip-rocrate", rocratePath);
      if (zipResult.success) {
        setOutput(
          (prevOutput) =>
            prevOutput +
            `\nRO-Crate successfully zipped at: ${zipResult.zipPath}`
        );
        onComplete(zipResult.zipPath);
      } else {
        throw new Error(zipResult.error);
      }
    } catch (error) {
      console.error("Error processing RO-Crate:", error);
      setOutput((prevOutput) => prevOutput + `\nError: ${error.message}`);
    }
  };

  const handleBrowse = async () => {
    try {
      const result = await ipcRenderer.invoke("open-directory-dialog");
      if (result.filePaths && result.filePaths.length > 0) {
        setRocratePath(result.filePaths[0]);
      }
    } catch (error) {
      console.error("Failed to open directory dialog:", error);
      setOutput("Error: Failed to open directory dialog");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormTitle>Package RO-Crate</FormTitle>
      <StyledFormGroup className="mb-3">
        <StyledLabel>RO-Crate Path</StyledLabel>
        <StyledInput
          type="text"
          value={rocratePath}
          onChange={(e) => setRocratePath(e.target.value)}
          required
        />
        <BrowseButton variant="secondary" onClick={handleBrowse}>
          Browse
        </BrowseButton>
      </StyledFormGroup>
      <StyledButton type="submit">Process and Package RO-Crate</StyledButton>
      {output && <OutputContainer>{output}</OutputContainer>}
    </StyledForm>
  );
}

export default PackageForm;