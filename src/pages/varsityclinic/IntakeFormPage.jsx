import React, { useMemo, useState } from "react";

export default function IntakeFormPage() {
  const maritalOptions = [
    "Married",
    "Common Law",
    "Single",
    "Separated",
    "Divorced",
    "Widowed",
  ];

  const conditions = [
    "High Cholesteral",
    "High Blood Pressure",
    "Diabetes",
    "Heart Attack/Heart Disease",
    "Depression",
    "Anxiety",
    "Other Mental Problems",
    "Gout",
    "Seizures/Epilepsy",
    "Joint Pain",
    "Osteoporosis",
    "Asthma/COPD",
    "Other",
  ];

  const [form, setForm] = useState({
    // Patient Info
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
    previousPhysician: "",
    phone: "",
    maritalStatus: "",
    children: "", // Yes/No
    childrenAtHomeCount: "",
    occupation: "",
    healthCard: "",
    pharmacy: "",

    // Emergency Contact
    ecFirstName: "",
    ecLastName: "",
    ecPhone: "",
    ecRelationship: "",

    // Medical History
    medicalConditions: [],
    medicalHistoryNotListed: "",

    surgicalHistory: [""],
    familyHistory: [""],
    currentMedications: [""],

    smoke: "", // Yes/No/Quit
    smokePerDay: "",
    smokeYears: "",
    smokeQuitWhen: "",

    allergies: "", // Yes/No
    allergyList: "",
    allergyFrequency: "", // Daily/Weekly/Monthly

    alcohol: "", // Yes/No
    alcoholFrequency: "", // Daily/Weekly/Monthly

    recreationalDrugs: "", // Yes/No/Discuss with Doctor

    fluVaccine: "", // Yes/No
    fluVaccineDate: "",

    covidVaccine: "", // Yes/No
    covidVaccineDate: "",

    doctorAware: "",
  });

  const setField = (name, value) => setForm((p) => ({ ...p, [name]: value }));

  const toggleCondition = (name) => {
    setForm((p) => {
      const has = p.medicalConditions.includes(name);
      return {
        ...p,
        medicalConditions: has
          ? p.medicalConditions.filter((x) => x !== name)
          : [...p.medicalConditions, name],
      };
    });
  };

  const addRow = (key) => setForm((p) => ({ ...p, [key]: [...p[key], ""] }));
  const removeRow = (key, idx) =>
    setForm((p) => ({
      ...p,
      [key]: p[key].length <= 1 ? p[key] : p[key].filter((_, i) => i !== idx),
    }));
  const updateRow = (key, idx, value) =>
    setForm((p) => ({
      ...p,
      [key]: p[key].map((v, i) => (i === idx ? value : v)),
    }));

  const showChildrenCount = form.children === "Yes";
  const showSmokingYes = form.smoke === "Yes";
  const showSmokingQuit = form.smoke === "Quit";
  const showAllergyDetails = form.allergies === "Yes";
  const showAlcoholFrequency = form.alcohol === "Yes";
  const showFluDate = form.fluVaccine === "Yes";
  const showCovidDate = form.covidVaccine === "Yes";

  const requiredMissing = useMemo(() => {
    // Mirror required-ness seen on the page (core required fields + conditional ones)
    const missing = [];
    const req = (k, label) => {
      if (!String(form[k] ?? "").trim()) missing.push(label);
    };

    // Patient
    req("firstName", "First Name");
    req("lastName", "Last Name");
    req("email", "Email");
    req("dob", "Date of Birth");
    req("gender", "Gender");
    req("previousPhysician", "Previous Physician");
    req("phone", "Phone");
    req("maritalStatus", "Marital Status");
    req("children", "Children?");
    if (showChildrenCount) req("childrenAtHomeCount", "How many at home?");
    req("occupation", "Occupation");
    req("healthCard", "Healthcard #");

    // Emergency contact
    req("ecFirstName", "Emergency Contact First Name");
    req("ecLastName", "Emergency Contact Last Name");
    req("ecPhone", "Emergency Contact Phone");
    req("ecRelationship", "Emergency Contact Relationship");

    // Medical History
    if (form.medicalConditions.length === 0) missing.push("Medical History (select at least one or choose Other)");
    if (!form.surgicalHistory.some((x) => x.trim())) missing.push("Surgical History (at least one line)");
    if (!form.familyHistory.some((x) => x.trim())) missing.push("Family History (at least one line)");
    if (!form.currentMedications.some((x) => x.trim())) missing.push("Current Medications (at least one line)");
    req("smoke", "Do you smoke?");
    if (showSmokingYes) {
      req("smokePerDay", "How Many Per Day?");
      req("smokeYears", "How Many Years?");
    }
    if (showSmokingQuit) req("smokeQuitWhen", "When did you quit?");
    req("allergies", "Do you have allergies?");
    if (showAllergyDetails) {
      req("allergyList", "What allergies do you have?");
      req("allergyFrequency", "How often do you have allergic reactions?");
    }
    req("alcohol", "Do You Consume Alcohol Regularly?");
    if (showAlcoholFrequency) req("alcoholFrequency", "How often do you consume alcohol?");
    req("recreationalDrugs", "Do You Use Recreational Drugs?");
    req("fluVaccine", "Influenza vaccine in last year?");
    if (showFluDate) req("fluVaccineDate", "Flu vaccine date");
    req("covidVaccine", "Covid vaccine in last year?");
    if (showCovidDate) req("covidVaccineDate", "Covid vaccine date");
    req("doctorAware", "Anything the Doctor Should Be Made Aware Of?");

    return missing;
  }, [
    form,
    showChildrenCount,
    showSmokingYes,
    showSmokingQuit,
    showAllergyDetails,
    showAlcoholFrequency,
    showFluDate,
    showCovidDate,
  ]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (requiredMissing.length) {
      alert(
        "Please complete the required fields:\n\n" +
          requiredMissing.map((x) => `• ${x}`).join("\n")
      );
      return;
    }

    // TODO: send to your backend / Formspree / EmailJS
    console.log("SUBMIT", form);
    alert("Submitted! (Check console for payload)");
  };

  return (
    <main className="bg-white">
      {/* Header strip (simple Staywell-like) */}
      <div className="bg-[#B7D96A]">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#e11d2e]">
            New Patient Intake Form
          </h1>
          <p className="mt-2 text-black/75">
            Please complete all required fields. Our team will review your submission.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <form onSubmit={onSubmit} className="space-y-10">
          {/* Patient Info */}
          <Section title="Patient Information">
            <TwoCol>
              <TextInput required label="First" value={form.firstName} onChange={(v) => setField("firstName", v)} />
              <TextInput required label="Last" value={form.lastName} onChange={(v) => setField("lastName", v)} />
            </TwoCol>

            <TwoCol>
              <TextInput required type="email" label="Email" value={form.email} onChange={(v) => setField("email", v)} />
              <TextInput required placeholder="MM/DD/YYYY" label="Date of Birth" value={form.dob} onChange={(v) => setField("dob", v)} />
            </TwoCol>

            <TwoCol>
              <TextInput required label="Gender" value={form.gender} onChange={(v) => setField("gender", v)} />
              <TextInput required label="Previous Physician" value={form.previousPhysician} onChange={(v) => setField("previousPhysician", v)} />
            </TwoCol>

            <TwoCol>
              <TextInput required label="Phone" value={form.phone} onChange={(v) => setField("phone", v)} />
              <Select
                required
                label="Marital Status"
                value={form.maritalStatus}
                onChange={(v) => setField("maritalStatus", v)}
                options={maritalOptions}
                placeholder="Select..."
              />
            </TwoCol>

            <TwoCol>
              <RadioGroup
                required
                label="Children?"
                value={form.children}
                onChange={(v) => setField("children", v)}
                options={["Yes", "No"]}
              />
              <TextInput
                required={showChildrenCount}
                disabled={!showChildrenCount}
                label="How many at home?"
                value={form.childrenAtHomeCount}
                onChange={(v) => setField("childrenAtHomeCount", v)}
              />
            </TwoCol>

            <TwoCol>
              <TextInput required label="Occupation" value={form.occupation} onChange={(v) => setField("occupation", v)} />
              <TextInput required label="Healthcard #" value={form.healthCard} onChange={(v) => setField("healthCard", v)} />
            </TwoCol>

            <TwoCol>
              <TextInput label="Pharmacy" value={form.pharmacy} onChange={(v) => setField("pharmacy", v)} />
              <div />
            </TwoCol>
          </Section>

          {/* Emergency Contact */}
          <Section title="Emergency Contact">
            <TwoCol>
              <TextInput required label="First" value={form.ecFirstName} onChange={(v) => setField("ecFirstName", v)} />
              <TextInput required label="Last" value={form.ecLastName} onChange={(v) => setField("ecLastName", v)} />
            </TwoCol>

            <TwoCol>
              <TextInput required label="Phone" value={form.ecPhone} onChange={(v) => setField("ecPhone", v)} />
              <TextInput required label="Relationship" value={form.ecRelationship} onChange={(v) => setField("ecRelationship", v)} />
            </TwoCol>
          </Section>

          {/* Medical History */}
          <Section title="Medical History">
            <div>
              <Label required>Have you ever experienced any of the following?</Label>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {conditions.map((c) => (
                  <label
                    key={c}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3"
                  >
                    <input
                      type="checkbox"
                      checked={form.medicalConditions.includes(c)}
                      onChange={() => toggleCondition(c)}
                    />
                    <span className="text-sm text-black/80">{c}</span>
                  </label>
                ))}
              </div>

              <p className="mt-3 text-sm text-black/60">
                Please check all that apply (or choose “Other” and describe below).
              </p>

              <div className="mt-4">
                <Label>Medical History Not Listed</Label>
                <textarea
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
                  rows={4}
                  value={form.medicalHistoryNotListed}
                  onChange={(e) => setField("medicalHistoryNotListed", e.target.value)}
                />
              </div>
            </div>

            <Repeater
              title="Surgical History"
              required
              values={form.surgicalHistory}
              onAdd={() => addRow("surgicalHistory")}
              onRemove={(i) => removeRow("surgicalHistory", i)}
              onChange={(i, v) => updateRow("surgicalHistory", i, v)}
            />

            <Repeater
              title="Family History"
              required
              values={form.familyHistory}
              onAdd={() => addRow("familyHistory")}
              onRemove={(i) => removeRow("familyHistory", i)}
              onChange={(i, v) => updateRow("familyHistory", i, v)}
            />

            <Repeater
              title="Current Medications"
              required
              values={form.currentMedications}
              onAdd={() => addRow("currentMedications")}
              onRemove={(i) => removeRow("currentMedications", i)}
              onChange={(i, v) => updateRow("currentMedications", i, v)}
            />

            <RadioGroup
              required
              label="Do you smoke?"
              value={form.smoke}
              onChange={(v) => setField("smoke", v)}
              options={["Yes", "No", "Quit"]}
            />

            {(showSmokingYes || showSmokingQuit) && (
              <TwoCol>
                <TextInput
                  required={showSmokingYes}
                  disabled={!showSmokingYes}
                  label="How Many Per Day?"
                  value={form.smokePerDay}
                  onChange={(v) => setField("smokePerDay", v)}
                />
                <TextInput
                  required={showSmokingYes}
                  disabled={!showSmokingYes}
                  label="How Many Years?"
                  value={form.smokeYears}
                  onChange={(v) => setField("smokeYears", v)}
                />
              </TwoCol>
            )}

            {showSmokingQuit && (
              <TextInput
                required
                label="When did you quit?"
                value={form.smokeQuitWhen}
                onChange={(v) => setField("smokeQuitWhen", v)}
              />
            )}

            <RadioGroup
              required
              label="Do you have allergies?"
              value={form.allergies}
              onChange={(v) => setField("allergies", v)}
              options={["Yes", "No"]}
            />

            {showAllergyDetails && (
              <>
                <TextInput
                  required
                  label="What allergies do you have?"
                  value={form.allergyList}
                  onChange={(v) => setField("allergyList", v)}
                />
                <RadioGroup
                  required
                  label="How often do you have allergic reactions?"
                  value={form.allergyFrequency}
                  onChange={(v) => setField("allergyFrequency", v)}
                  options={["Daily", "Weekly", "Monthly"]}
                />
              </>
            )}

            <RadioGroup
              required
              label="Do You Consume Alcohol Regularly?"
              value={form.alcohol}
              onChange={(v) => setField("alcohol", v)}
              options={["Yes", "No"]}
            />

            {showAlcoholFrequency && (
              <RadioGroup
                required
                label="How often do you consume alcohol?"
                value={form.alcoholFrequency}
                onChange={(v) => setField("alcoholFrequency", v)}
                options={["Daily", "Weekly", "Monthly"]}
              />
            )}

            <RadioGroup
              required
              label="Do You Use Recreational Drugs?"
              value={form.recreationalDrugs}
              onChange={(v) => setField("recreationalDrugs", v)}
              options={["Yes", "No", "Discuss with Doctor"]}
            />

            <RadioGroup
              required
              label="Have you had an influenza vaccine in the last year?"
              value={form.fluVaccine}
              onChange={(v) => setField("fluVaccine", v)}
              options={["Yes", "No"]}
            />

            {showFluDate && (
              <TextInput
                required
                placeholder="MM/DD/YYYY (rough month/year ok)"
                label="Date"
                value={form.fluVaccineDate}
                onChange={(v) => setField("fluVaccineDate", v)}
              />
            )}

            <RadioGroup
              required
              label="Have you had an Covid vaccine in the last year?"
              value={form.covidVaccine}
              onChange={(v) => setField("covidVaccine", v)}
              options={["Yes", "No"]}
            />

            {showCovidDate && (
              <TextInput
                required
                placeholder="MM/DD/YYYY (rough month/year ok)"
                label="Date"
                value={form.covidVaccineDate}
                onChange={(v) => setField("covidVaccineDate", v)}
              />
            )}

            <div>
              <Label required>Anything the Doctor Should Be Made Aware Of?</Label>
              <textarea
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
                rows={4}
                value={form.doctorAware}
                onChange={(e) => setField("doctorAware", e.target.value)}
              />
            </div>

            {/* CAPTCHA note (you can wire real reCAPTCHA later) */}
            <div className="rounded-xl border border-dashed border-gray-300 p-4 text-sm text-black/60">
              CAPTCHA placeholder — integrate reCAPTCHA here if needed.
            </div>
          </Section>

          <div className="flex items-center justify-end gap-3">
            <button
              type="submit"
              className="rounded-xl bg-[#e11d2e] px-6 py-3 font-semibold text-white shadow-sm hover:bg-red-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

/* ---------------- UI bits ---------------- */

function Section({ title, children }) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
      <h2 className="text-xl font-extrabold text-[#515D72]">{title}</h2>
      <div className="mt-6 space-y-6">{children}</div>
    </section>
  );
}

function TwoCol({ children }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-5">{children}</div>;
}

function Label({ children, required }) {
  return (
    <label className="block text-sm font-semibold text-black/80">
      {children} {required ? <span className="text-red-600">*</span> : null}
    </label>
  );
}

function TextInput({ label, required, type = "text", value, onChange, placeholder, disabled }) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-red-500
          ${disabled ? "bg-gray-100 text-black/50 border-gray-200" : "bg-white border-gray-200"}`}
      />
    </div>
  );
}

function Select({ label, required, value, onChange, options, placeholder }) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
      >
        <option value="">{placeholder || "Select..."}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function RadioGroup({ label, required, value, onChange, options }) {
  return (
    <div>
      <Label required={required}>{label}</Label>
      <div className="mt-2 flex flex-wrap gap-3">
        {options.map((opt) => (
          <label
            key={opt}
            className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm
              ${value === opt ? "border-red-500 bg-red-50" : "border-gray-200 bg-white"}`}
          >
            <input
              type="radio"
              name={label}
              checked={value === opt}
              onChange={() => onChange(opt)}
            />
            <span className="text-black/80">{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function Repeater({ title, required, values, onAdd, onRemove, onChange }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <Label required={required}>{title}</Label>
        <button
          type="button"
          onClick={onAdd}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold hover:bg-gray-50"
        >
          + Add
        </button>
      </div>

      <p className="mt-1 text-xs text-black/50">
        Press the plus button to add a new line.
      </p>

      <div className="mt-3 space-y-3">
        {values.map((v, idx) => (
          <div key={idx} className="flex gap-3">
            <input
              value={v}
              onChange={(e) => onChange(idx, e.target.value)}
              className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter details..."
            />
            <button
              type="button"
              onClick={() => onRemove(idx)}
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold hover:bg-gray-50"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}