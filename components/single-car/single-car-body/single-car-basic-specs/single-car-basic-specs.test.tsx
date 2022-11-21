import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BasicSpecs from ".";

const redbookVehicle = {
  RedbookFamily: { model: "sample model" },
  RedbookMake: { make: "sample make" },
  acceleration: 10,
  altEngTorque: null,
  badgeCode: "sample badge code",
  badgeDescription: "sample badge description",
  badgeSecondaryDescription: "sample badge secondary description",
  bodyConfigDescription: null,
  bodyStyleDescription: "sample body style description",
  buildCountryOriginDescription: "sample country origin description",
  camDescription: "sample cam description",
  cylinders: 8,
  driveCode: "sample drive code",
  engineConfigurationDescription: "sample engine configuration description",
  engineDescription: "sample engine description",
  engineLocation: "sample engine location",
  familyCode: "sample family code",
  frontRimDesc: "sample front rim description",
  frontTyreSize: "sample front tyre size",
  fuelDeliveryDescription: "sample fuelDeliveryDescription",
  gearLocationDescription: "sample gearLocationDescription",
  gearNum: 6,
  gearTypeDescription: "sample gearTypeDescription",
  grossCombinationMass: null,
  grossVehicleMass: 50,
  inductionDescription: "sample inductionDescription",
  kerbWeight: 100,
  limitedEdition: "sample limited edition",
  makeCode: "sample make code",
  makeName: "sample make name",
  manufacturerBodyConfig: "sample manufacturer body config",
  manufacturerBodyStyle: "sample manufacturer body style",
  manufacturerWheelBaseConfig: null,
  modelCode: "sample model code",
  modelName: "sample model name",
  power: 10,
  powerRpmFrom: 4,
  powerRpmTo: 9,
  rearRimDesc: "sample rear rim description",
  rearTyreSize: "sample rear tyre size",
  seriesModelYear: null,
  seriesPublic: "sample series public",
  tareMass: 100,
  torqueRpmFrom: 50,
  vehicle_height: 23,
  vehicle_length: 16,
  vehicle_roofline: null,
  vehicle_width: 23,
  wheelBase: 6,
  wheelBaseConfig: 10,
  yearGroup: 3,
  vehicle_fuel_type_description: "sample vehicle type description",
  vehicle_warranty_years: 5,
  vehicle_warranty_km: 10000,
};

describe("Single car basic specification Tests", () => {
  it("Renders all specifications value", async () => {
    render(<BasicSpecs kms={10} redbookVehicle={redbookVehicle} />);

    const values = screen.getAllByTestId("para");
    expect(values.length).toEqual(8);
    
    expect(values[0].textContent).toBe("10");
    expect(values[1].textContent).toBe("sample drive code 8 Cyl");
    expect(values[2].textContent).toBe("10 Nm");
    expect(values[3].textContent).toBe("sample vehicle type description");
    expect(values[4].textContent).toBe("6XD");
    expect(values[5].textContent).toBe("NA");
    expect(values[6].textContent).toBe("5 Yr, 10000 KMs");
    expect(values[7].textContent).toBe("NA");
  });
});
