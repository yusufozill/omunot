//
//  animator.swift
//  omunot
//
//  Created by yusuf on 09.04.24.

import UIKit

class ViewController: UIViewController {

  override func viewDidLoad() {
    super.viewDidLoad()

    let button = UIButton(frame: CGRect(x: 0, y: 0, width: 100, height: 50))
    button.center = view.center
    button.backgroundColor = .blue
    button.setTitle("Animasyon Başlat", for: .normal)
    button.addTarget(self, action: #selector(buttonPressed), for: .touchUpInside)
    view.addSubview(button)
  }

  @objc func buttonPressed() {
    UIView.animate(withDuration: 1.0, animations: {
      // Animasyon kodları buraya yazılır.
    })
  }
}
