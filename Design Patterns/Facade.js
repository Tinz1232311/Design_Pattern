// Các hệ thống phức tạp của nhà thông minh
class LightSystem {
  turnOn() {
    console.log("Lights are ON.");
  }

  turnOff() {
    console.log("Lights are OFF.");
  }
}

class AirConditionerSystem {
  turnOn() {
    console.log("Air Conditioner is ON.");
  }

  turnOff() {
    console.log("Air Conditioner is OFF.");
  }
}

class SecuritySystem {
  activate() {
    console.log("Security System is ACTIVATED.");
  }

  deactivate() {
    console.log("Security System is DEACTIVATED.");
  }
}

// Facade: Cung cấp một giao diện đơn giản cho các hệ thống phức tạp
class HomeAutomationFacade {
  constructor() {
    this.lightSystem = new LightSystem();
    this.airConditionerSystem = new AirConditionerSystem();
    this.securitySystem = new SecuritySystem();
  }

  startMorningRoutine() {
    console.log("Starting morning routine...");
    this.lightSystem.turnOn();
    this.airConditionerSystem.turnOn();
    this.securitySystem.deactivate();
    console.log("Morning routine completed!");
  }

  startNightRoutine() {
    console.log("Starting night routine...");
    this.lightSystem.turnOff();
    this.airConditionerSystem.turnOff();
    this.securitySystem.activate();
    console.log("Night routine completed!");
  }
}

// Client Code
const homeAutomation = new HomeAutomationFacade();

// Người dùng muốn bắt đầu buổi sáng
homeAutomation.startMorningRoutine(); // Tự động bật đèn, điều hòa và tắt hệ thống an ninh

// Người dùng muốn bắt đầu buổi tối
homeAutomation.startNightRoutine(); // Tự động tắt đèn, điều hòa và bật hệ thống an ninh
