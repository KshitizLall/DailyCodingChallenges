import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class TeamAssignment {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input names, topics, and team size
        System.out.print("Enter names (separated by commas): ");
        String namesInput = scanner.nextLine();
        String[] names = namesInput.split(",");

        System.out.print("Enter topics (separated by commas): ");
        String topicsInput = scanner.nextLine();
        String[] topics = topicsInput.split(",");

        System.out.print("Enter team size: ");
        int teamSize = scanner.nextInt();

        // Randomly assign names and topics to teams
        List<String> nameList = new ArrayList<>();
        Collections.addAll(nameList, names);

        List<String> topicList = new ArrayList<>();
        Collections.addAll(topicList, topics);

        Collections.shuffle(nameList);
        Collections.shuffle(topicList);

        int numTeams = nameList.size() / teamSize;
        if (nameList.size() % teamSize != 0) {
            numTeams++;
        }

        System.out.println("\n--- Team Assignment ---");
        System.out.println("Team Size: " + teamSize);
        System.out.println("Number of Teams: " + numTeams);
        System.out.println("-----------------------");

        for (int i = 0; i < numTeams; i++) {
            int startIndex = i * teamSize;
            int endIndex = Math.min(startIndex + teamSize, nameList.size());

            System.out.println("Team " + (i + 1) + ":");

            for (int j = startIndex; j < endIndex; j++) {
                System.out.println("Name: " + nameList.get(j) + ", Topic: " + topicList.get(j));
            }

            System.out.println();
        }
    }
}
